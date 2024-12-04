'use client'

import React from 'react'

function layout({ children }: any) {
  return (
    <div className="" style={{ height: '100vh' }}>
      <div className="h-[100px] flex flex-row justify-center items-center gap-x-7">
        <h2 className="font-semibold text-[2vh]">Projects</h2>
        <h2 className="font-semibold text-[2vh]">Forms</h2>
        <h2 className="font-semibold text-[2vh]">Report</h2>
        <h2 className="font-semibold text-[2vh]">Settings</h2>
        <button className="bg-red-600 px-2 py-1 rounded-md">
          <h2 className="font-semibold text-[2vh] text-white">Logout</h2>
        </button>
      </div>
      {children}
    </div>
  )
}

export default layout
