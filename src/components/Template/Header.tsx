import { Title } from './Title'
import { AlterThemeButton } from './AlterThemeButton'
import useAppData from '@/data/hook/UseAppData'

interface iHeader {
  title: string,
  subtitle: string,
}

export const Header = ({ title, subtitle }: iHeader ) => {
  const { theme, alterTheme } = useAppData()

  return (
    <div className={`flex`}>
      <Title title={ title } subtitle={ subtitle } />
      <div className={`flex flex-grow justify-end`}>
        <AlterThemeButton theme={ theme } alterTheme={ alterTheme } />
      </div>
    </div>
  )
}