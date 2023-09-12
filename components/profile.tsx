'use client'
import Image from 'next/image'
import React from 'react'
import { signOut } from 'next-auth/react'


const ProfilePage = ({ user }: { user: user }) => {
    return (
        <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500">
            <Image
                alt='bgImage'
                width={100}
                height={100}
                src="https://i.imgur.com/dYcYQ7E.png"
                className="w-full h-[150px]"
            />
            <div className="flex justify-center -mt-8">
                <Image
                    width={100}
                    height={100}
                    alt='avater'
                    src={user.image}
                    className="rounded-full border-solid border-white border-2 -mt-3"
                />
            </div>
            <div className="text-center px-3 pb-6 pt-2">
                <h3 className="text-white text-sm bold font-sans">{user.name}</h3>
                <p className="mt-2 font-sans font-light text-white">{user.email}</p>
                <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={() => { signOut() }}>
                    <div className="absolute inset-0 w-3 bg-red-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white">Logout!</span>
                </button>
            </div>
            <div className="flex justify-center pb-3 text-white">
                <div className="text-center mr-3 border-r pr-3">
                    <h2>34</h2>
                    <span>Photos</span>
                </div>
                <div className="text-center">
                    <h2>42</h2>
                    <span>Friends</span>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage