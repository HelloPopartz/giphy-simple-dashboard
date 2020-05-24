import { createMemoryHistory, MemoryHistory } from 'history'
import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { Store } from 'redux'
import { configureStore } from 'services/redux/redux.store'
import { RootState } from 'services/redux/redux.types'
import { Router } from 'utils/routes'

import { render as plainRender, wait } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createTheme, ThemeProvider } from 'services/theme'

type RenderOptions<State> = {
  initialState?: State
  store?: Store<any, any>
  route?: string
  history?: MemoryHistory<any>
}

export function render<State = RootState>(
  ui: React.ReactElement,
  {
    initialState,
    store,
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: RenderOptions<State> = {}
) {
  const theme = createTheme()
  const mockedStore: Store<RootState, any> = store || configureStore(initialState as any)
  jest.spyOn(mockedStore, 'dispatch')
  const component = (
    <ThemeProvider theme={theme}>
      <StoreProvider store={mockedStore}>
        <Router history={history}>{ui}</Router>
      </StoreProvider>
    </ThemeProvider>
  )

  return {
    ...plainRender(component),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store: mockedStore,
  }
}

//Re-exports
export { cleanup, fireEvent, act, getByText } from '@testing-library/react'
export { userEvent, wait }
