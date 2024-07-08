import { useRouter } from "next/navigation"
import Loading from "/public/images/loading.gif"
import useAuth from "@/data/hook/useAuth"
import Image from "next/image"
import Head from "next/head"

type tForceAuth = {
  children: React.ReactNode
}

const ForceAuth = ({ children }: tForceAuth) => {

  const Router = useRouter()
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
        {children}
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
    Router.push("/auth")
    return null
  }

}

export default ForceAuth