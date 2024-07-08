import router from "next/router"
import Loading from "/public/images/loading.gif"
import useAuth from "@/data/hook/useAuth"
import Image from "next/image"
import Head from "next/head"

const forceAuth = (jsx: React.ReactNode) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, loading } = useAuth()

  const renderContent = () => {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if(!document.cookie?.includes("admin-panel-auth")){
                  window.location.href = "/auth"
                }
              `
            }}
          />
        </Head>
        { jsx }
      </>
    )
  }

  const renderLoading = () => {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={Loading} alt="loading page icon" width={0} height={0} />
      </div>
    )
  }

  if (!loading && user?.email) {
    return renderContent()
  } else if (loading) {
    return renderLoading()
  } else {
    router.push("/auth")
    return null
  }

}

export default forceAuth