'use client'

import React, { FC, useState, useEffect, ChangeEventHandler } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page: FC = () => {

    const [opensidebar, setOpenSidebar] = useState<boolean>(true)

    const [code, setCode] = useState<string>("")
    const [url, setUrl] = useState<string>("https://")
    const [endpoint, setEndpoint] = useState<string>("/")
    const [method, setMethod] = useState<string>("")

    const generateCode = (): void => {
        setCode(`const response = await fetch("${url}${endpoint}", {
            method: "${method}"
        }); \n\n\n const result = await response.json();`)
    }

    return (
        <div className="flex flex-row">
            <div
                style={{ backgroundImage: `url("/bg2.jpg")` }}
                className={`bg-cover bg-no-repeat min-h-screen ${!opensidebar ? "sm:w-1/12" : "sm:w-1/3 lg:w-1/6 px-[16px] py-4"} bg-black border-r border-cyan-500`}>

                <div className="flex flex-row justify-between mb-[20px]">
                    <h1 className='text-white text-[2.6vh] font-bold'>Fuser</h1>
                    <button
                        onClick={() => { setOpenSidebar(!opensidebar) }}
                        className="border-2 px-5 py-2 border-white rounded-xl">
                        <p className='text-white text-[1.5vh]'>Close</p>
                    </button>
                </div>

                {/* Menu */}
                <h2 className='text-white mb-[5px] text-lg font-semibold'>Front End Code Builder</h2>
                <div className="backdrop-opacity-10 backdrop-invert bg-black/10 p-4 rounded-xl">
                    <p className='font-bold text-cyan-500'>Network Request</p>
                    <p className='text-white font-[400] bg-cyan-600 px-2 py-1 mt-1 rounded-md '><Link href={"/builder/fetch"}>. Fetch</Link></p>
                    <p className='text-white font-[400]'><Link href={"/builder/axios"}>. Axios</Link></p>

                    <p className='font-bold text-cyan-500 mt-3'>Database Query Tester</p>
                    <p className='text-white font-[400]'>. MySQL</p>
                    <p className='text-white font-[400]'>. PostgreSQL</p>
                    <p className='text-white font-[400]'>. MongoDB</p>
                </div>
            </div>
            <div
                className="sm:w-2/3 lg:w-5/6 bg-black  min-h-screen">
                <div
                    style={{ backgroundImage: `url("/bg2.jpg")` }}
                    className='pt-7 bg-cover bg-no-repeat  min-h-screen'
                // className='bg-gradient-to-r from-black to-cyan-700'
                >
                    {/* <Image
                        src="/fuser2.jpg"
                        width={1000}
                        height={1}
                        alt="Picture of the author"
                        className='mx-auto w-[800px] h-[250px] rounded-[0px] mb-3'
                    /> */}
                    <h1 className='text-white font-semibold text-[2.1vh] text-left mb-[20px] mx-10'>
                        Fetch API - Code Builder
                    </h1>

                    <div className=" rounded-[7px] border-white py-5 px-10 m-3">

                        {/* Switch */}
                        {/* <h3 className='text-white font-bold text-[2.6vh] mb-[10px]'>Chain - <span className='text-[20px]'>Yes for .then chain</span></h3>
                        <div className="flex flex-row justify-start mb-[25px]">
                            <button className='text-white px-5 py-2 rounded-lg font-semibold border-solid border-white hover:border-2 bg-blue-700 hover:bg-transparent hover:text-white mr-2'>
                                Yes
                            </button>
                            <button className='text-white px-5 py-2 rounded-lg font-semibold border-solid border-white hover:border-2 bg-red-700 hover:bg-transparent hover:text-white mr-2'>
                                No
                            </button>
                        </div> */}


                        <div className="lg:flex lg:flex-row">
                            {/* URL */}
                            <div className="sm:w-full lg:w-2/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-black/10 rounded-lg pt-4 pb-6 px-4 mb-5">
                                <h3 className='text-white font-semibold text-[1.8vh] mb-[8px]'>URL</h3>
                                <input type="text" className='font-semibold bg-white/90 pl-2 w-full rounded-lg h-[35px]'
                                    value={url}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setUrl(e.target.value)
                                    }}
                                />
                            </div>

                            {/* Endpoint */}
                            <div className="sm: w-full lg:w-1/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-black/10 rounded-lg pt-4 pb-6 px-4 mb-5">
                                <h3 className='text-white font-semibold text-[1.8vh] mb-[8px]'>Endpoint</h3>
                                <input type="text" className='font-semibold bg-white/90 pl-2 w-full rounded-lg h-[35px]'
                                    value={endpoint}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setEndpoint(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="lg:flex lg:flex-row">
                            {/* Method */}
                            <div draggable className="sm:w-full lg:w-2/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-black/10 rounded-lg pt-4 pb-6 px-4 mb-5">
                                <h3 className='text-white font-semibold text-[1.8vh] mb-[8px]'>Method</h3>
                                <div className="flex flex-row justify-start sm:space-x-2 md:space-x-3">
                                    <button
                                        onClick={() => {
                                            setMethod("")
                                        }}
                                        className='text-black px-6 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-[#BCECE0] hover:bg-transparent hover:text-white '>
                                        None
                                    </button>
                                    <button
                                        onClick={() => {
                                            setMethod("GET")
                                        }}
                                        className='text-black px-6 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-cyan-500 hover:bg-transparent hover:text-white mr-3'>
                                        GET
                                    </button>
                                    <button
                                        onClick={() => {
                                            setMethod("POST")
                                        }}
                                        className='text-black px-6 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-cyan-500 hover:bg-transparent hover:text-white mr-3'>
                                        POST
                                    </button>
                                    <button
                                        onClick={() => {
                                            setMethod("PUT")
                                        }}
                                        className='text-black px-6 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-cyan-500 hover:bg-transparent hover:text-white mr-3'>
                                        PUT
                                    </button>
                                    <button
                                        onClick={() => {
                                            setMethod("DELETE")
                                        }}
                                        className='text-black px-6 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-cyan-500 hover:bg-transparent hover:text-white mr-2'>
                                        DELETE
                                    </button>
                                </div>
                            </div>

                            {/* Headers */}
                            <div className="sm: w-full lg:w-1/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-black/10 rounded-lg pt-4 pb-6 px-4 mb-5">
                                <h3 className='text-white font-semibold text-[1.8vh] mb-[8px]'>Headers - Content Type</h3>
                                <div className="flex flex-row justify-start  sm:space-x-2 md:space-x-3">
                                    <button
                                        onClick={() => {
                                        }}
                                        className='text-black px-6 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-[#BCECE0] hover:bg-transparent hover:text-white'>
                                        None
                                    </button>
                                    <button className='text-black px-5 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-cyan-500 hover:bg-transparent hover:text-white'>
                                        application/*
                                    </button>
                                    <button className='text-black px-5 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-cyan-500 hover:bg-transparent hover:text-white'>
                                        application/json
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="lg:flex lg:flex-row">
                            {/* Body */}
                            <div className="sm: w-full lg:w-2/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-black/10 rounded-lg pt-4 pb-6 px-4 mb-5">
                                <h3 className='text-white font-semibold text-[1.8vh] mb-[8px]'>Body</h3>
                                <div className="flex flex-row justify-start  sm:space-x-2 md:space-x-3">
                                    <button
                                        onClick={() => {
                                        }}
                                        className='text-black px-6 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-[#BCECE0] hover:bg-transparent hover:text-white'>
                                        None
                                    </button>
                                    <button className='text-black px-5 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-cyan-500 hover:bg-transparent hover:text-white'>
                                        Form Data
                                    </button>
                                    <button className='text-black px-5 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-cyan-500 hover:bg-transparent hover:text-white'>
                                        Raw
                                    </button>
                                </div>
                            </div>
                            <div className="sm: w-full lg:w-1/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-black/10 rounded-lg pt-4 pb-6 px-4 mb-5">
                                {/* <h3 className='text-white font-semibold text-[1.8vh] mb-[8px]'>Body</h3>
                                <div className="flex flex-row justify-start  sm:space-x-2 md:space-x-3">
                                    <button
                                        onClick={() => {
                                        }}
                                        className='text-black px-6 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-[#BCECE0] hover:bg-transparent hover:text-white'>
                                        None
                                    </button>
                                    <button className='text-black px-5 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-cyan-500 hover:bg-transparent hover:text-white'>
                                        Form Data
                                    </button>
                                    <button className='text-black px-5 py-2 rounded-xl font-semibold border-solid border-white hover:border-2 bg-cyan-500 hover:bg-transparent hover:text-white'>
                                        Raw
                                    </button>
                                </div> */}
                            </div>
                        </div>

                        {/* Generate Code Button */}
                        <div className="flex flex-row justify-center my-[50px]">
                            <button
                                onClick={() => {
                                    generateCode()
                                }}
                                className='text-black px-5 py-2 rounded-lg font-semibold border-solid border-white hover:border-2 bg-cyan-500 hover:bg-transparent hover:text-white mr-2'>
                                Generate Code
                            </button>
                        </div>

                        {/* Generated Codes */}
                        <h3 className='text-white font-semibold text-[2.1vh] mb-[10px]'>Codes : </h3>
                        <div className="backdrop-opacity-10 backdrop-invert bg-black/10 px-10 py-5 rounded-md border-2 border-cyan-500">

                            <p className="text-white">
                                {code}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default page