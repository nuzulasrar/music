'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Modal from '@/components/Modal'
import EditRatingMemberModal from '@/components/EditRatingMemberModal'
import EditPhotoDetailModal from '@/components/EditPhotoDetailModal'
import { log } from 'console'

const page = ({ params }: any) => {
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
      Sample 1
    </div>
  )
}

export default page
