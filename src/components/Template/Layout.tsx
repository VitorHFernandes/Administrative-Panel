'use client'

import { Content } from './Content'
import { Header } from './Header'
import { SideBar } from './SideBar'

interface iLayout {
  title: string,
  subtitle: string,
  children?: any
}

export const Layout = ({ title, subtitle, children }: iLayout ) => {
  return (
    <div className={` flex h-screen w-screen `}>
      <SideBar />
      <div className={` 
        flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800
      `}>
        <Header title={ title } subtitle={ subtitle } />
        <Content>
          { children }
        </Content>
      </div>
    </div>
  )
}