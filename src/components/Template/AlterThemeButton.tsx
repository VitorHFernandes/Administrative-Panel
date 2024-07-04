import { IconMoon, IconSun } from "../Icons"

interface iAlterThemeButton {
  theme: string | undefined,
  alterTheme?: () => void
}

export const AlterThemeButton = ({ theme, alterTheme }: iAlterThemeButton) => {
  return theme === 'dark' ?(
    <div onClick={ alterTheme } className={`
      hidden sm:flex items-center cursor-pointer
      bg-gradient-to-r from-yellow-300 to-yellow-600
      w-14 lg:w-24 h-8 p-1 rounded-full
    `}>
      <div className={`flex items-center justify-center rounded-full bg-white w-6 h-6 text-yellow-600`}>
        { IconSun(4) }
      </div>
      <div className={`hidden lg:flex items-center ml-4 text-white`}>
        <span className={`font-sm`}>Claro</span>
      </div>
    </div>
  ) : (
    <div onClick={ alterTheme } className={`
      hidden sm:flex items-center justify-end cursor-pointer
      bg-gradient-to-r from-gray-500 to-gray-900
      w-14 lg:w-24 h-8 p-1 rounded-full
    `}>
      <div className={`hidden lg:flex items-center mr-2 text-gray-200`}>
        <span className={`font-sm`}>Escuro</span>
      </div>
      <div className={`flex items-center justify-center rounded-full bg-black w-6 h-6 text-yellow-300`}>
        { IconMoon(4) }
      </div>
    </div>
  )
}