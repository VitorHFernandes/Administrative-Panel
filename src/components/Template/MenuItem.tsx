import Link from 'next/link'

interface iMenuItem {
  url?: string,
  text: string,
  icon: any,
  className?: string,
  onClick?: (evento: any) => void
}

export const MenuItem = ({ url, text, icon, onClick, className }: iMenuItem) => {
  const renderLink = () => {
    return (
      <div className={`
        flex flex-col justify-center items-center
        text-gray-800 h-20 w-20
        dark:text-gray-200
        ${className}
      `}>
        { icon }
        <span className={`text-xs font-light`}>
          { text }
        </span>
      </div>
    )
  }

  return (
    <li onClick={ onClick } className={`hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}>
      { url ? (
      <Link href={ url } className={`flex flex-col justify-center items-center h-20 w-20`}>
        { renderLink() }
      </Link>
    ) : (
      renderLink()
    )}
    </li>
  )
}