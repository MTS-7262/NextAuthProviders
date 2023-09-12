'use client'
import LoadingPage from '@/components/loading'
import LoginPage from '@/components/login'
import ProfilePage from '@/components/profile'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  return (
    <>
      {status == "loading" ?
        <LoadingPage /> :
        status == "authenticated" ?
          <ProfilePage user={{ name: session.user?.name!, email: session.user?.email!, image: session.user?.image! }} /> :
          <LoginPage />}
    </>
  )
}
