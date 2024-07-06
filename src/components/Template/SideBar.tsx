import { IconHome, IconAdjustments, IconBell, IconExit } from "@/components/Icons"
import { MenuItem } from "./MenuItem"
import { Logo } from "./Logo"
import useAuth from "@/data/hook/useAuth"

export const SideBar = () => {
  const { logOut } = useAuth()

  return (
    <aside className={`
      flex flex-col 
      bg-gray-200 text-gray-700
      dark:bg-gray-900
    `}>
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800 
        h-20 w-20
      `}>
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" text="Start" icon={ IconHome } />
        <MenuItem url="/adjustments" text="Adjustments" icon={ IconAdjustments } />
        <MenuItem url="/notifications" text="Notifications" icon={ IconBell } />
      </ul>
      <ul>
        <MenuItem 
          onClick={logOut}
          text="Exit" icon={ IconExit }
          className={`
            text-red-600 dark:text-red-400 
            hover:bg-red-400 hover:text-white
            dark:hover:text-white
          `} />
      </ul>
    </aside>
  )
}