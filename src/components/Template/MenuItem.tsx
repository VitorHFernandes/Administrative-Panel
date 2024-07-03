interface iMenuItem {
  url: string,
  text: string,
  icon: any
}

export const MenuItem = ({ url, text, icon }: iMenuItem) => {
  return (
    <li>
      { icon }
    </li>
  )
}