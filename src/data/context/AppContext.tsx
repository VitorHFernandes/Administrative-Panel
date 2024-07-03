"use client"
import { createContext } from "react";

interface iAppProvider {
  children: React.ReactNode
}

interface iAppContext {
  name: string | null
}

const defaultContextValue: iAppContext = {
  name: null
}

const AppContext= createContext<iAppContext>(defaultContextValue)

export function AppProvider({ children }: iAppProvider){
  return (
    <AppContext.Provider value={{
      name: 'Teste Context API'
    }}>
      { children }
    </AppContext.Provider>
  )
}

export default AppContext