'use client'

import { createContext, useState } from "react";
import firebase from '@/firebase/config'
import User from "@/model/User";
import { useRouter } from "next/navigation";

interface iAuthContext {
  user?: User | null | undefined,
  googleLogin?: () => Promise<void>
}

type tAuthProvider = {
  children: React.ReactNode
} 

const AuthContext = createContext<iAuthContext>({})

const normalUser = async (firebaseUser: firebase.User): Promise<User> => {
  const token = await firebaseUser.getIdToken()

  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0]?.providerId,
    imgUrl: firebaseUser.photoURL
  }
}

export const AuthProvider = ({ children }: tAuthProvider) => {
  const [user, setUser] = useState<User | null>(null)

  const Router = useRouter()

  const googleLogin = async () => {
    const resp = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    if(resp.user?.email){
      const user = await normalUser(resp.user)
      Router.push('/')
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      googleLogin
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext