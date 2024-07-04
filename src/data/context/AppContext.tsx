"use client"
import { createContext, useState } from "react";

type tTheme = 'dark' | ''

interface iAppProvider {
  children: React.ReactNode
}

interface iAppContext {
  theme?: tTheme,
  alterTheme?: () => void
}

const defaultContextValue: iAppContext = {
  theme: ''
}

const AppContext= createContext<iAppContext>(defaultContextValue)

export function AppProvider({ children }: iAppProvider){
  const [theme, setTheme] = useState<tTheme>('dark')

  const alterTheme = () => setTheme(theme === '' ? 'dark' : '')

  return (
    <AppContext.Provider value={{
      theme,
      alterTheme
    }}>
      { children }
    </AppContext.Provider>
  )
}

export default AppContext