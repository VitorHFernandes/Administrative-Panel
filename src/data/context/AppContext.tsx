"use client"
import { createContext, useState } from "react";
import { useEffect } from "react";

interface iAppProvider {
  children: React.ReactNode
}

interface iAppContext {
  theme?: string,
  alterTheme?: () => void
}

const defaultContextValue: iAppContext = {
  theme: ''
}

const AppContext= createContext<iAppContext>(defaultContextValue)

export function AppProvider({ children }: iAppProvider){
  const [theme, setTheme] = useState('dark')

  const alterTheme = () => {
    const newTheme = theme === '' ? 'dark' : ''
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem('theme')
    setTheme(savedTheme ?? '')
  }, [])
  
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