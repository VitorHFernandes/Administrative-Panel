'use client'

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import firebase from '@/firebase/config'
import Cookies from 'js-cookie'
import User from "@/model/User";

interface iAuthContext {
  user?: User | null | undefined,
  googleLogin?: () => Promise<void>
  logOut?: () => Promise<void>
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

const managementCookie = (logged: boolean) => {
  if (logged) {
    Cookies.set('admin-panel-auth', logged.toString(), {
      expires: 7
    })
  } else {
    Cookies.remove('admin-panel-auth')
  }
}

export const AuthProvider = ({ children }: tAuthProvider) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  const settingsSessions = async (firebaseUser: any) => {
    if (firebaseUser?.email) {
      const user = await normalUser(firebaseUser)
      setUser(user)
      managementCookie(true)
      setLoading(false)
      return user.email
    } else {
      setUser(null)
      managementCookie(false)
      setLoading(false)
      return false
    }
  }

  const Router = useRouter()

  const googleLogin = async () => {
    try {
      setLoading(true)
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      settingsSessions(resp.user)
      Router.push('/')
    } finally {
      setLoading(true)
    }
  }

  const logOut = async () => {
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await settingsSessions(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(Cookies.get('admin-panel-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(settingsSessions)
      return () => cancel()
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      googleLogin,
      logOut
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext