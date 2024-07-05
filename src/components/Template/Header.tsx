import { Title } from './Title'
import { AlterThemeButton } from './AlterThemeButton'
import useAppData from '@/data/hook/useAppData'
import UserAvatar from './UserAvatar'

interface iHeader {
  title: string,
  subtitle: string,
}

export const Header = ({ title, subtitle }: iHeader ) => {
  const { theme, alterTheme } = useAppData()

  return (
    <div className={`flex`}>
      <Title title={ title } subtitle={ subtitle } />
      <div className={`flex flex-grow justify-end items-center`}>
        <AlterThemeButton theme={ theme } alterTheme={ alterTheme } />
        <UserAvatar className="ml-3" />
      </div>
    </div>
  )
}