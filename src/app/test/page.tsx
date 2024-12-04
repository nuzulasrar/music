'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Modal from '@/components/Modal'
import EditRatingMemberModal from '@/components/EditRatingMemberModal'
import EditPhotoDetailModal from '@/components/EditPhotoDetailModal'
import { log } from 'console'

declare const window: any

const page = ({ params }: any) => {
  function sendMessage() {
    const message = { message: 'Hello from WebViewssss!' }
    // alert("sadasd");
    window.ReactNativeWebView.postMessage(JSON.stringify(message))
  }

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
        onclick={sendMessage()}
      >
        Send Message to React Native
      </button>
      Sample 1
    </div>
  )
}

export default page
