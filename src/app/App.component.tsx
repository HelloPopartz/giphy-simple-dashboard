import React, { useMemo } from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { configureStore } from 'services/redux/redux.store'

import { AppLibraryProvider } from './AppLibraryProvider.component'
import { AppRoutes } from './AppRoutes.component'

export function App() {
  // Initialize redux store -> https://es.redux.js.org/
  // Instead of declaring as a singleton, declaring the redux store real time usually prevents some circular dependencies in Jest
  const store = useMemo(configureStore, [])
  return (
    <StoreProvider store={store}>
      <AppLibraryProvider>
        <AppRoutes />
      </AppLibraryProvider>
    </StoreProvider>
  )
}
