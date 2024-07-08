'use client'

import useAppData from '@/data/hook/useAppData'
import { Content } from './Content'
import { Header } from './Header'
import { SideBar } from './SideBar'
//import ForceAuth from '../Auth/ForceAuth'
import ForceAuth from '@/functions/forceAuth'

interface iLayout {
  title: string,
  subtitle: string,
  children?: any
}

export const Layout = ({ title, subtitle, children }: iLayout ) => {
  const { theme } = useAppData()
  
  return ForceAuth(
//    <ForceAuth>
      <div className={`${theme} flex h-screen w-screen`}>
        <SideBar />
        <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800` }>
          <Header title={ title } subtitle={ subtitle } />
          <Content>
            { children }
          </Content>
        </div>
      </div>
//    </ForceAuth>
  )
}