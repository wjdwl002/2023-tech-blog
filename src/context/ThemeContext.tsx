import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { lightTheme, darkTheme } from './theme'

interface propType {
  children: React.ReactNode
}

export const ThemeContext = createContext({
  themeMode: 'light',
  setThemeMode: (themeMode: string) => {},
  themeColorset: {}
})

export const ThemeProvider = ({ children }: propType) => {
  const [themeMode, setThemeMode] = useState('light')
  const themeColorset = themeMode === 'light' ? lightTheme : darkTheme

  useEffect(() => {
    const initialTheme = window?.localStorage.getItem('theme') ?? 'light'
    setThemeMode(initialTheme)
  })

  return (
      <ThemeContext.Provider value={{ themeMode, setThemeMode, themeColorset }}>
          { children }
      </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  const { themeMode, setThemeMode } = context
  const themeColorset = themeMode === 'light' ? lightTheme : darkTheme

  const toggleTheme = useCallback(() => {
    if (themeMode === 'light') {
      setThemeMode('dark')
      window.localStorage.theme = 'dark'
    } else {
      setThemeMode('light')
      window.localStorage.theme = 'light'
    };
  }, [themeMode])

  return { themeMode, toggleTheme, themeColorset }
}
