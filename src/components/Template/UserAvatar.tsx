import useAuth from "@/data/hook/useAuth"
import Image from "next/image"
import Link from "next/link"

interface iUserAvatar {
  className?: string
}

const UserAvatar = ({ className }: iUserAvatar) => {
  const { user } = useAuth()

  return (
    <Link href="/profile" className="relative h-10 w-10">
      {user?.imgUrl ? (
        <Image
          src={user?.imgUrl}
          alt="User avatar"
          layout="fill"
          className={`rounded-full cursor-pointer object-cover ${className}`}
        />
      ) : (
        <Image
          src="/images/next.svg"
          alt="User avatar"
          layout="fill"
          className={`rounded-full cursor-pointer object-cover ${className}`}
        />
      )}
    </Link>
  )
}

export default UserAvatar