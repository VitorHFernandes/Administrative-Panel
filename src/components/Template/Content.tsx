interface iContent {
  children?: any
}

export const Content = ({ children }: iContent ) => {
  return (
    <div className={`flex flex-col mt-7 dark:text-gray-200`}>
      { children }
    </div>
  )
}