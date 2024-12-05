'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Modal from '@/components/Modal'
import EditRatingMemberModal from '@/components/EditRatingMemberModal'
import EditPhotoDetailModal from '@/components/EditPhotoDetailModal'
import { log } from 'console'

import { useRouter } from 'next/navigation'

declare const window: any

const page = ({ params }: any) => {
  const router = useRouter()

  function sendMessage() {
    const message = { message: 'Hello from WebViewssss!', newURL: '/profile' }
    // alert("sadasd");
    window.ReactNativeWebView.postMessage(JSON.stringify(message))
  }

  useEffect(() => {
    const handleMessage = (event: any) => {
      alert('Message received from React Native: ' + JSON.stringify(event.data))
      const message = {
        message: 'Hello from WebViewssss!',
        newURL: 'https://inspection-dev.prestasiperintis.com/home',
      }
      window.ReactNativeWebView.postMessage(JSON.stringify(message))
      // router.push('/signup')
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
      }}
    >
      <button
        // style={{width="500px", font-size: "100"}}
        style={{ width: '500px', fontSize: '100px' }}
        onClick={() => sendMessage()}
      >
        Send Message to React Native
      </button>
      Sample 1
    </div>
  )
}

export default page
