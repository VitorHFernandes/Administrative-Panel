interface iTitle {
  title: string,
  subtitle: string,
}

export const Title = ({ title, subtitle }: iTitle ) => {
  return (
    <div>
      <h1
      className={`font-black text-3xl text-gray-900 dark:text-gray-100`}
      >
        { title }
      </h1>
      <h2 
        className={`font-light text-sm text-gray-600 dark:text-gray-300`}>
        { subtitle }
      </h2>
    </div>
  )
}