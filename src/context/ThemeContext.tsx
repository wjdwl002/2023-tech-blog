import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { lightTheme, darkTheme } from './theme'

interface propType {
  children: React.ReactNode
}

export interface IThemeType {
  themeMode: string
  themeColorset: {
    baseColor: string
    textColor: string
    subTextColor: string
    pTextColor: string
    borderColor: string
    pointColor: string
    subPointColor: string
  }
  toggleTheme: (arg0: string) => void
}

export const ThemeContext = createContext({
  themeMode: 'dark',
  setThemeMode: (themeMode: string) => {},
  themeColorset: {}
})

export const ThemeProvider = ({ children }: propType) => {
  const [themeMode, setThemeMode] = useState('dark')
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
