'use client'

import AuthInput from "@/components/Auth/AuthInput"
import { useState } from "react"

const Auth = () => {
  const [mode, setMode] = useState<'login' | 'sign up'>('login')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const submit = () => mode === 'login' ? console.log('login') : console.log('register')

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img 
          src="https://images.unsplash.com/photo-1717330551200-83da9ed42835?h=2154.857142857143&w=1200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzIwMDYyMDI0fA&ixlib=rb-4.0.3"
          alt="Authentication screen image"
          className="h-screen w-full object-cover"
        />
          
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className={`text-xl font-bold mb-5`}>
          {mode === 'login' ? 'Sign in to your account' : 'Create your account'}
        </h1>
        <AuthInput 
          label="E-mail"
          value={email}
          changeValue={setEmail}
          type="email"
          required
        />
        <AuthInput 
          label="Password"
          value={pass}
          changeValue={setPass}
          type="password"
          required
        />

        <button 
          onClick={submit}
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}>
          {mode === 'login' ? 'Login' : 'Register'}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button 
          onClick={submit}
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