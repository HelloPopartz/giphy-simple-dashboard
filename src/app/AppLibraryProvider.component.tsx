import { WithChildren } from 'utils/react'
import React, { useMemo } from 'react'
import { Router } from 'utils/routes'
import { createTheme, ThemeProvider } from 'services/theme'
import { historyManager } from 'services/history'

export type AppLibraryProps = WithChildren

// Necessary providers and libraries for App
export function AppLibraryProvider({ children }: AppLibraryProps) {
  const theme = useMemo(createTheme, [])
  return (
    <ThemeProvider theme={theme}>
      <Router history={historyManager}>{children}</Router>
    </ThemeProvider>
  )
}
