'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const [email, setEmail] = useState('nuzulasrar@gmail.com')
  const [password, setPassword] = useState('abc123')

  const login = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })

      const result = await response.json()

      if (result) {
        console.log(JSON.stringify(result, null, 2))
        if (result.success) {
          localStorage.setItem('sessionToken', result.token)
          router.push('/project')
        }
      } else {
        alert('Error')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className="flex-col flex-1 h-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      <div className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex items-center justify-between">
          <div className="">
            <Image src="/logo.png" alt="" width={75} height={75} />
          </div>
          <h1 className="text-white font-semibold text-[25px]">
            48- Prestasi Perintis Inspection System
          </h1>
          <div className="">
            <Image
              src="/logo.png"
              alt=""
              width={75}
              height={75}
              className="opacity-0"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-start h-full bg-transparent mt-[50px]">
        <div className="shadow-md rounded-lg p-4 px-6 sm:w-6/12 lg:w-3/12 bg-white">
          <div className="mb-2">
            <p className="mb-2 text-green-600">Email</p>
            <input
              type="text"
              className="bg-gray-200 rounded-md w-full h-[35px] pl-2"
              onChange={(e: any) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-2">
            <p className="mb-2 text-green-600">Password</p>
            <input
              type="password"
              className="bg-gray-200 rounded-md w-full h-[35px] pl-2"
              onChange={(e: any) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="mt-2 float-right">
            <button
              onClick={() => {
                router.push('/signup')
              }}
              className="bg-blue-500 rounded-md px-5 py-2 text-white"
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                // router.push('/project')
                login()
              }}
              className="bg-green-600 rounded-md px-5 py-2 text-white ml-2"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
