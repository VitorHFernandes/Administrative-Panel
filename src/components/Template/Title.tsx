'use client'

import { SideBar } from './SideBar'

interface iTitle {
  title: string,
  subtitle: string,
}

export const Title = ({ title, subtitle }: iTitle ) => {
  return (
    <div>
      <h1
      className={`
        
        `}
      >
        { title }
      </h1>
      <h2 
        className={`
        
        `}>
        { subtitle }
      </h2>
    </div>
  )
}