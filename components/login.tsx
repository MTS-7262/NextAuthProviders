'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

const LoginPage = () => {
  return (
    <>
      <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={() => { signIn() }}>
        <div className="absolute inset-0 w-3 bg-slate-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white">Sign In!</span>
      </button>
    </>
  )
}

export default LoginPage