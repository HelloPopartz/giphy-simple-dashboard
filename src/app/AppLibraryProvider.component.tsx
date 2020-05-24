import { WithChildren } from 'utils/react'
import React, { useMemo } from 'react'
import { Router } from 'utils/routes'
import { createTheme, ThemeProvider } from 'services/theme'
import { historyManager } from 'services/history'

export type AppLibraryProps = WithChildren

// Necessary providers and libraries for App
// @material-ui/styles for the styling solution -> https://material-ui.com/es/styles/basics/
// React-router for routing -> https://reacttraining.com/react-router/web/guides/quick-start
export function AppLibraryProvider({ children }: AppLibraryProps) {
  const theme = useMemo(createTheme, [])
  return (
    <ThemeProvider theme={theme}>
      <Router history={historyManager}>{children}</Router>
    </ThemeProvider>
  )
}
