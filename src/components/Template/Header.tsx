import { Title } from './Title'

interface iHeader {
  title: string,
  subtitle: string,
}

export const Header = ({ title, subtitle }: iHeader ) => {
  return (
    <div>
      <Title title={ title } subtitle={ subtitle } />
    </div>
  )
}