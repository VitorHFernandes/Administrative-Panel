'use client'

import { useState } from "react"
import { IconWarn } from "@/components/Icons"
import AuthInput from "@/components/Auth/AuthInput"
import useAuth from "@/data/hook/useAuth"
import Image from "next/image"


const Auth = () => {
  const { Login, SignUp, googleLogin } = useAuth()

  const [mode, setMode]   = useState<'login' | 'sign up'>('login')
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPass]   = useState('')

  const showError = (message: any, timeInSeconds: number = 5) => {
    setError(message)
    setTimeout(() => setError(null), timeInSeconds * 1000)
  }

    const submit = async () => {
    try {
      if (mode === 'login') {
        if(Login) {
          await Login(email, password)
        } else {
          showError('Login is not defined! Contact your administrator.')
        }
      } else {
        if(SignUp) {
          await SignUp(email, password)
        } else {
          showError('SignUp is not defined! Contact your administrator.')
        }
      }
    } catch(e) {
      showError((e as Error).message ?? 'Unknown error!')
    }
  }


  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
      <Image
        src="https://images.unsplash.com/photo-1717330551200-83da9ed42835?h=2154.857142857143&w=1200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzIwMDYyMDI0fA&ixlib=rb-4.0.3"
        alt="Authentication screen image"
        width={1000}
        height={7000}
        quality={100}
        priority={true}
        className="h-screen w-full object-cover"
      />
          
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className={`text-xl font-bold mb-5`}>
          {mode === 'login' ? 'Sign in to your account' : 'Create your account'}
        </h1>
        {error ? (
        <div className={`
            flex items-center
            bg-red-400 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg
          `}>
            {IconWarn()}
            <span className="ml-3">{ error }</span>
        </div>
        ) : false}
        <AuthInput 
          label="E-mail"
          value={email}
          changeValue={setEmail}
          type="email"
          required
        />
        <AuthInput 
          label="Password"
          value={password}
          changeValue={setPass}
          type="password"
          required
        />

        <button 
          onClick={submit}
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}>
          {mode === 'login' ? 'Login' : 'SignUp'}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button 
          onClick={googleLogin}
          className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}>
            Enter with Google
        </button>

        {mode === 'login' ?(
          <p className="mt-8">
            New here?
            <a 
              onClick={() => setMode('sign up')} 
              className={`
                text-blue-500 hover:text-blue-700
                font-semibold cursor-pointer
                `}> Create an account</a>
          </p>
        ) : (
          <p className="mt-8">
            Already part of our community?
            <a 
              onClick={() => setMode('login')} 
              className={`
                text-blue-500 hover:text-blue-700
                font-semibold cursor-pointer
              `}> Log in with your credentials</a>
        </p>
        )}

      </div>
    </div>
  )
}

export default Auth