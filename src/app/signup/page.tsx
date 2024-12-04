'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const [email, setEmail] = useState('nuzulasrar@gmail.com')
  const [password, setPassword] = useState('abc1234')

  const signUp = async () => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })

      const result = await response.json()

      if (result) {
        alert(JSON.stringify(result))
      } else {
        alert('Error')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className="flex-col flex-1 h-full overflow-hidden bg-gray-100"
      style={{ height: '100vh' }}
    >
      <div className="flex justify-center items-start h-full bg-transparent mt-[50px]">
        <div className="shadow-xl rounded-[20px] p-10 px-6 sm:w-6/12 lg:w-6/12 bg-white">
          <div className="mb-2">
            <p className="mb-2 text-black font-semibold">Email</p>
            <input
              type="text"
              className="bg-slate-100 rounded-md w-full h-[35px] pl-2"
              onChange={(e: any) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-6">
            <p className="mb-2 text-black font-semibold">Password</p>
            <input
              type="password"
              className="bg-slate-100 rounded-md w-full h-[35px] pl-2"
              onChange={(e: any) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          {/* <div className="mt-2 float-right"> */}
          <button
            onClick={() => {
              signUp()
            }}
            className="bg-blue-500 rounded-md px-5 py-2 text-white w-full"
          >
            Sign Up
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
