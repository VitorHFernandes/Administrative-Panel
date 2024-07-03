import Link from 'next/link'

interface iMenuItem {
  url: string,
  text: string,
  icon: any
}

export const MenuItem = ({ url, text, icon }: iMenuItem) => {
  return (
    <li className={`hover:bg-gray-100`}>
      <Link href={ url } className={` flex flex-col justify-center items-center h-20 w-20 `}>
        { icon }
        <span className={` text-xs font-light text-gray-800 `}>
          { text }
        </span>
      </Link>
    </li>
  )
}