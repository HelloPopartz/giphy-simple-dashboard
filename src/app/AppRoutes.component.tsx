import React from 'react'
import { Route, Switch } from 'utils/routes'

import { GALLERY_VIEW_PATH } from './AppRoutes.data'
import { Gallery } from './scenes'
import { Main } from './components'

export function AppRoutes() {
  return (
    <Main>
      <Switch>
        <Route component={Gallery} path={GALLERY_VIEW_PATH} />
      </Switch>
    </Main>
  )
}
