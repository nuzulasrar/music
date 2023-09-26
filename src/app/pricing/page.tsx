'use client'

import React, { FC, useState, useEffect, ChangeEventHandler } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "../globals.css"
// import { CirclePicker } from 'react-color';

const page: FC = () => {

    const [theme, setTheme] = useState<string>("F97316")

    const [opensidebar, setOpenSidebar] = useState<boolean>(true)



    const [endpoint, setEndpoint] = useState<string>("/")

    const [complexityPrice, setComplexityPrice] = useState<number>(4000)
    const [modulePrice, setModulePrice] = useState<number>(0)
    const [discount, setDiscount] = useState(0)

    const [duration, setDuration] = useState<any>(2)

    const complexity_lists = [
        { id: 1, name: "<b>Simple.</b> 1-5 Screens. 0-3 Application Modules.", price: 4000 },
        { id: 2, name: "<b>Medium.</b> 6-10 Screens. 4-5 Application Modules.", price: 8500 },
        { id: 3, name: "<b>Complex.</b> 10-15 Screens. Above 15 Screens are charged per screen. 5 or more Application Modules. ", price: 14000 },
    ]

    const module_lists = [
        { id: 1, name: "Account Registration & Authentication (Sign Up / Sign In)", description: "", price: 1000 },
        { id: 2, name: "Account Profile", description: "", price: 1000 },
        { id: 3, name: "Navigation - Menu", description: "", price: 300 },
        { id: 4, name: "Online Payment Gateways", description: "", price: 1200 },
        { id: 5, name: "Booking / Appoinment", description: "", price: 1000 },
        { id: 6, name: "E-Commerce / Online Shopping", description: "", price: 1500 },
        { id: 7, name: "Take Photos / Videos", description: "", price: 800 },
        { id: 8, name: "Upload Picture / Video", description: "", price: 500 },
        { id: 9, name: "Generate Reports - PDF / Files", description: "", price: 800 },
        { id: 10, name: "View/Add/Edit/Delete Information", description: "", price: 500 },
        { id: 11, name: "User Visual Customization (eg: theme color)", description: "", price: 800 },
        { id: 12, name: "Animations", description: "", price: 1500 },
        { id: 13, name: "Geofence / Locations", description: "", price: 1000 },
        { id: 14, name: "Google Maps / Other Maps", description: "", price: 1000 },
        { id: 15, name: "Online Wallets", description: "", price: 800 },
    ]

    const [selectedComplexity, setSelectedComplexity] = useState<number>(1)
    const [selectedModules, setSelectedModules] = useState<Array<number>>([])

    const AddOrRemoveModule = (id: number, price: number) => {

        let thismodule = [...selectedModules]
        let filteredModule: Array<number> = []

        if (thismodule.includes(id)) {
            filteredModule = thismodule.filter((value) => {
                return value != id;
            })
            setModulePrice(old => old - price)
        } else {
            setModulePrice(old => old + price)
            filteredModule = [...thismodule, id]
        }

        setSelectedModules(filteredModule)

    }

    useEffect(() => {
        if (selectedModules.length > 3 && selectedModules.length < 6) {
            setSelectedComplexity(2)
        } else if (selectedModules.length > 5) {
            setSelectedComplexity(3)
        }
    }, [selectedModules])

    useEffect(() => {

        // Calculate Complexity Price
        const index = complexity_lists.findIndex(item => item.id === selectedComplexity);

        if (index !== -1) {
            setComplexityPrice(complexity_lists[index].price)
        }

        console.log(index);


        //Change Duration based on complexity
        if (selectedComplexity == 1 && duration > 2) {
            setDuration(2);
        }
        else if (selectedComplexity === 2 && (duration < 5 || duration > 9)) {
            setDuration(5);
        }
        else if (selectedComplexity === 3 && duration < 7) {
            setDuration(7);
        }
    }, [selectedComplexity])



    // If Price or Duration Changes
    useEffect(() => {


        let min = 0;

        if (selectedComplexity === 1) {
            min = 2
        }
        else if (selectedComplexity === 2) {
            min = 5
        }
        else if (selectedComplexity === 3) {
            min = 7
        }

        let thisdiscount = (duration - min) * 300

        setDiscount(thisdiscount)

    }, [duration])

    const [showDevice, setShowDevice] = useState(true)

    return (
        <div className="flex flex-row">
            {/* <iframe
                width="0"
                height="0"
                src={`https://www.youtube.com/embed/o8GrqUSdzi0?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            /> */}
            <div
                style={{ backgroundImage: `url("/bg2.jpg")` }}
                className={`bg-cover bg-no-repeat min-h-screen ${!opensidebar ? "sm:w-1/12" : "sm:w-1/3 lg:w-1/6 px-[16px] py-4"} bg-black border-r border-cyan-500`}>

                <div className="flex flex-row justify-between mb-[20px]">
                    <h1 className={`text-[2.6vh] font-bold`} style={{ color: `#${theme}` }}>Fuser</h1>
                    <button
                        onClick={() => { setOpenSidebar(!opensidebar) }}
                        className="border-2 px-5 py-2 border-white rounded-xl">
                        <p className='text-white text-[1.5vh]'>Close</p>
                    </button>
                </div>

                {/* Menu */}
                <h2 className='text-white mb-[5px] text-lg font-semibold'>Front End Code Builder</h2>
                <div className="backdrop-opacity-10 backdrop-invert bg-black/10 p-4 rounded-xl">
                    <p className={`font-bold`} style={{ color: `#${theme}` }}>Network Request</p>
                    <p className={`text-white font-[400] bg-[#${theme}] px-2 py-1 mt-1 rounded-md`}><Link href={"/builder/fetch"}>. Fetch</Link></p>
                    <p className='text-white font-[400]'><Link href={"/builder/axios"}>. Axios</Link></p>

                    <p className={`font-bold mt-3`} style={{ color: `#${theme}` }}>Database Query Tester</p>
                    <p className='text-white font-[400]'>. MySQL</p>
                    <p className='text-white font-[400]'>. PostgreSQL</p>
                    <p className='text-white font-[400]'>. MongoDB</p>
                </div>
                <div className="flex mt-5 space-x-2 flex-wrap">
                    <button
                        onClick={() => setTheme("F97316")}
                        className='bg-orange-500 text-white px-5 py-2 rounded-lg mb-2'>
                        Orange
                    </button>
                    <button
                        onClick={() => setTheme("22D3EE")}
                        className='bg-cyan-500 text-white px-5 py-2 rounded-lg mb-2'>
                        Cyan
                    </button>
                    <button
                        onClick={() => setTheme("10B981")}
                        className='bg-emerald-500 text-white px-5 py-2 rounded-lg mb-2'>
                        Emerald
                    </button>
                    <button
                        onClick={() => setTheme("6366F1")}
                        className='bg-indigo-500 text-white px-5 py-2 rounded-lg mb-2'>
                        Indigo
                    </button>
                </div>
            </div>
            <div
                // className="sm:w-2/3 lg:w-5/6 bg-gradient-to-br from-black to-[#001C25]  min-h-screen"
                className="sm:w-2/3 lg:w-5/6 bg-gray-200 dark:bg-gray-900  min-h-screen"
            >
                <div
                    // style={{ backgroundImage: `url("/bg2.jpg")` }}
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
                    {/* <h1 className='text-white font-semibold text-[2.1vh] text-left mb-[20px] mx-10'> */}
                    <div className="flex mb-[10px] px-12">
                        <h1 className={`text-white dark:text-slate-900 px-4 py-2 rounded-lg font-semibold text-[2.1vh] text-left`} style={{ backgroundColor: `#${theme}` }}>
                            Price Calculator
                        </h1>
                    </div>

                    <div className=" rounded-[7px] border-white py-5 px-10 m-3">

                        {/* Switch */}
                        {/* <h3 className='text-white font-bold text-[2.6vh] mb-[10px]'>Chain - <span className='text-[20px]'>Yes for .then chain</span></h3>
                        <div className="flex flex-row justify-start mb-[22px]">
                            <button className='text-white px-5 py-2 rounded-lg font-semibold border-solid border-white hover:border-2 bg-blue-700 hover:bg-transparent hover:text-white mr-2'>
                                Yes
                            </button>
                            <button className='text-white px-5 py-2 rounded-lg font-semibold border-solid border-white hover:border-2 bg-red-700 hover:bg-transparent hover:text-white mr-2'>
                                No
                            </button>
                        </div> */}

                        <div className="lg:flex lg:flex-row">
                            {/* Modules */}
                            <div className="sm: w-full lg:w-2/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-white/10 rounded-lg pt-4 pb-6 px-4 mb-5">
                                <h3 className='text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]'>Application Modules <span className='px-3 py-1 text-white rounded-xl text-[12px]' style={{
                                    backgroundColor: `#${theme}`
                                }}>Pick one or more.</span></h3>
                                <div className="flex flex-wrap justify-start sm:space-x-2 md:space-x-3">
                                    {
                                        module_lists.map((item, index) => {
                                            return (
                                                <button
                                                    key={item.id}
                                                    onClick={() => {
                                                        AddOrRemoveModule(item.id, item.price)
                                                    }}
                                                    className={`${selectedModules.includes(item.id) ? "text-white border-l-[6px] border-l-slate-600" : "text-black"} dark:text-slate-900 px-6 py-3 bg-gray-200 rounded-0 font-semibold hover:scale-105 mt-3`}
                                                    style={{
                                                        // backgroundColor: selectedModules.includes(item.id) ? `#${theme}` : "white",
                                                        // borderColor: `#${theme}` 
                                                        // borderColor: selectedModules.includes(item.id) ? `#${theme}` : `rgb(107 114 128)`,
                                                        // borderWidth: selectedModules.includes(item.id) ? 0 : 0,
                                                        backgroundColor: selectedModules.includes(item.id) ? `#${theme}` : "rgb(229 231 235)",
                                                        clipPath: "polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%)"
                                                    }}
                                                >
                                                    {item.name}
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {/* Size & Complexity */}
                            <div draggable className="sm:w-full lg:w-1/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-white/10 rounded-lg pt-4 pb-6 px-4 mb-5">
                                <h3 className='text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]'>Application Size / Complexity <span className='px-3 py-1 text-white rounded-xl text-[12px]' style={{ backgroundColor: `#${theme}` }}>Pick one.</span></h3>
                                <div className="flex flex-wrap justify-start sm:space-x-2 md:space-x-3">
                                    {
                                        complexity_lists.map((item, index) => {
                                            return (
                                                <button
                                                    key={item.id}
                                                    onClick={() => {

                                                        //Set Complexity
                                                        if (item.id === 1) {

                                                            if (selectedModules.length > 3) {
                                                                alert("More than 3 Modules are selected. It is a Medium or Complex application.")
                                                            } else {
                                                                setSelectedComplexity(item.id)
                                                            }
                                                        }
                                                        else if (item.id === 2) {

                                                            if (selectedModules.length > 5) {
                                                                alert("More than 5 Modules are selected. It is a Complex application.")
                                                            } else {
                                                                setSelectedComplexity(item.id)
                                                            }
                                                        }
                                                        else if (item.id === 3) {

                                                            if (selectedModules.length > 6) {
                                                                alert("More than 5 Modules are selected. It is a Complex application.")
                                                            } else {
                                                                setSelectedComplexity(item.id)
                                                            }
                                                        }
                                                    }}
                                                    className={`${selectedComplexity == item.id ? "text-white border-l-[6px] border-l-slate-600" : "text-black"} dark:text-slate-900 px-6 py-3 rounded-0 font-semibold hover:scale-105 mt-3`}
                                                    style={{
                                                        backgroundColor: selectedComplexity === item.id ? `#${theme}` : "rgb(229 231 235)",
                                                        clipPath: "polygon(0 0, 100% 0, 100% 50%, 95% 100%, 0 100%)"
                                                    }}
                                                >
                                                    <p dangerouslySetInnerHTML={{ __html: item.name }}></p>
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>


                        <div className="lg:flex lg:flex-row">
                            {/* URL */}
                            {/* <div className="sm:w-full lg:w-2/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-black/10 rounded-lg pt-4 pb-6 px-4 mb-5"> */}
                            <div className="sm:w-full lg:w-2/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-white/10 rounded-lg pt-4 pb-6 px-4 mb-5">
                                {/* <h3 className='text-white font-semibold text-[1.8vh] mb-[8px]'>URL</h3> */}
                                <h3 className='text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]'>Development Duration <span className='px-3 py-1 text-white rounded-xl text-[12px]' style={{ backgroundColor: `#${theme}` }}>Longer duration is cheaper.</span></h3>
                                {/* <input type="text" className='font-semibold bg-white/90 pl-2 w-full rounded-lg h-[35px]' */}
                                <input className='slider mt-3 mb-3' type="range" id="vol" name="vol" value={duration} min={selectedComplexity === 1 ? 2 : selectedComplexity === 2 ? 5 : 7} max={selectedComplexity === 1 ? 4 : selectedComplexity === 2 ? 9 : 12} step={1} onChange={(e) => {
                                    setDuration(e.target.value);
                                }} />
                                <p className='text-black font-bold text-[2vh]'>{duration} Months of development + {duration < 10 ? "1 Month" : "2 Months"} of testing.</p>
                            </div>

                            {/* Endpoint */}
                            <div className="sm: w-full lg:w-1/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-white/10 rounded-lg pt-4 pb-6 px-4 mb-5">
                                <h3 className='text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]'>Profession / Industry</h3>
                                <input type="text" className='font-semibold bg-gray-200 dark:bg-white/90 pl-2 w-full rounded-lg h-[35px]'
                                    value={endpoint}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setEndpoint(e.target.value)
                                    }}
                                />
                                <select>
                                    <option value={1}>Education</option>
                                    <option value={2}>Information Technology</option>
                                    <option value={3}>Engineering</option>
                                    <option value={4}>Medical</option>
                                    <option value={5}>Personal</option>
                                    <option value={6}>Human Resources</option>
                                    <option value={7}>Real Estate</option>
                                    <option value={8}>Project Management</option>
                                    <option value={9}>School / University Projects</option>
                                    <option value={10}>Research</option>
                                    <option value={11}>Others</option>
                                </select>
                            </div>
                        </div>

                        <div className="lg:flex lg:flex-row">
                            {/* URL */}
                            {/* <div className="sm:w-full lg:w-2/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-black/10 rounded-lg pt-4 pb-6 px-4 mb-5"> */}
                            <div className="sm:w-full lg:w-2/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-white/10 rounded-lg pt-4 pb-6 px-4 mb-5">
                                {/* <h3 className='text-white font-semibold text-[1.8vh] mb-[8px]'>URL</h3> */}
                                <h3 className='text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]'>Application Demo <span className='px-3 py-1 text-white rounded-xl text-[12px]' style={{ backgroundColor: `#${theme}` }}>Your future app.</span></h3>
                                {/* <input type="text" className='font-semibold bg-white/90 pl-2 w-full rounded-lg h-[35px]' */}

                                <div className="py-2 flex flex-row">
                                    <input type="checkbox" className='mr-2' checked={showDevice ? true : false} onChange={(e) => setShowDevice(!showDevice)} />
                                    <p className="text-[16px]">Show Device</p>
                                </div>
                                <div className="flex flex-wrap justify-start sm:space-x-2 md:space-x-3 mt-5">

                                    {/* Login Screen */}
                                    <div className='flex flex-wrap justify-center items-center xl:hover:scale-110 mb-3'>
                                        <div className="flex justify-center items-center" style={{ height: 425, width: 250 }}>
                                            <div className="rounded-[22px] relative flex flex-col justify-start items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]" style={{ height: 425, width: 200, backgroundColor: `#${theme}` }}>
                                                <p className="text-black font-semibold text-[10px] absolute top-[6px] left-[19px] z-2">12:00</p>
                                                <Image alt="" src={"/engineering.png"} width={120} height={120} className='mt-10' />
                                                <div className="bg-white rounded-t-[20%] rounded-b-[22px] absolute bottom-0 h-48 flex flex-col justify-start items-center" style={{ width: 200 }}>
                                                    <p className='text-[14px] font-semibold justify-self-end text-end mt-4 -ml-20'>Username</p>
                                                    <input type="text" className='bg-gray-200 w-36 h-5 rounded-[5px] mb-0.5' />
                                                    <p className='text-[14px] font-semibold justify-self-end text-end -ml-20'>Password</p>
                                                    <input type="text" className='bg-gray-200 w-36 h-5 rounded-[5px] mb-4' />

                                                    <button className='rounded-md bg-white w-36 py-1 shadow-sm shadow-gray-600 mb-2' style={{ backgroundColor: `#${theme}` }}>
                                                        <p className='text-[10px] text-white font-semibold'>Login</p>
                                                    </button>
                                                    <button className='rounded-md bg-[rgba(100,100,100,1)] w-36 py-1 shadow-sm shadow-gray-600'>
                                                        <p className='text-[10px] text-white font-semibold'>Register</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {showDevice ?
                                            <Image alt="" src={"/iphone.png"} width={250} height={100} className='-ml-[250px]' style={{ zIndex: 1 }} />
                                            : null
                                        }
                                    </div>

                                    {/* Home Screen */}
                                    <div className='flex flex-wrap justify-center items-center xl:hover:scale-110 mb-3'>
                                        <div className="flex justify-center items-center" style={{ height: 425, width: 250 }}>

                                            <div className="rounded-[22px] relative flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)]" style={{ height: 425, width: 200, backgroundColor: `#${theme}` }}>

                                                {/* <div className="bg-[rgba(40,40,40,1)] rounded-t-xl rounded-b-[50px] absolute top-0 w-full h-40" style={{ zIndex: 1 }}> */}
                                                {/* <div className="bg-[rgba(40,40,40,0.97)] rounded-t-2xl rounded-b-[50px] absolute top-0 w-full h-40" style={{ zIndex: 1 }}> */}
                                                <div className="bg-[rgba(255,255,255,0.95)] rounded-t-[22px] rounded-b-[50px] absolute top-0 w-full h-40" style={{ zIndex: 1 }}>
                                                    <p className="text-black font-semibold text-[10px] absolute top-[6px] left-[19px] z-2">12:00</p>
                                                </div>



                                                {/* Graph */}
                                                <div className="px-2.5 mt-[30px] z-20">
                                                    {/* <div className='flex flex-row rounded-lg justify-center items-center bg-[rgba(70,70,70,1)] p-2 shadow-[0_3px_10px_rgb(255,255,255,0.)]'> */}
                                                    <div className='flex flex-row rounded-xl justify-center items-center bg-[rgba(0,0,0,0.85)] p-2 shadow-[0_3px_10px_rgb(255,255,255,0.)]'>
                                                        <p className="text-[12px] text-white"><span className='font-bold text-[20px]' style={{ color: `#${theme}` }}>+37</span> <br /> per month</p>
                                                        <div className="bg-[rgba(255,255,255,0.3)] p-2 ml-2 rounded-lg">
                                                            <Image alt="" src={"/graph.png"} width={75} height={60} />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Action Menu */}
                                                <div className="flex flex-row py-2 overflow-x-auto no-scrollbar px-2 z-20">
                                                    <div className="px-0.5">
                                                        <div className="bg-[rgba(255,255,255,0.95)] rounded-lg w-28 px-1.5 py-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                                            <Image alt="" src={"/hammer.png"} width={20} height={20} className='mt-2 mb-2' />
                                                            <p className='text-[12px] font-semibold text-black mb-0.5'>New Defects.</p>
                                                            <p className='text-[10px] text-slate-500 leading-[10px] mb-1'>Create a new defect checklist.</p>
                                                        </div>
                                                    </div>
                                                    <div className="px-0.5">
                                                        <div className="bg-[rgba(255,255,255,0.95)] rounded-lg w-28 px-1.5 py-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                                            <Image alt="" src={"/hammer.png"} width={20} height={20} className='mt-2 mb-2' />
                                                            <p className='text-[12px] font-semibold text-black mb-0.5'>Hardware Status.</p>
                                                            <p className='text-[10px] text-slate-500 leading-[10px] mb-1'>Monitor all hardware status. <span className='invisible'>sdsad</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="px-0.5">
                                                        <div className="bg-[rgba(255,255,255,0.95)] rounded-lg w-28 px-1.5 py-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                                            <Image alt="" src={"/hammer.png"} width={20} height={20} className='mt-2 mb-2' />
                                                            <p className='text-[12px] font-semibold text-black mb-0.5'>Generate Reports.</p>
                                                            <p className='text-[10px] text-slate-500 leading-[10px] mb-1'>Print and share new report. <span className='invisible'>sdsad</span></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* List */}
                                                <div className="px-2.5">
                                                    <div className="bg-[rgba(255,255,255,0.95)] w-full px-2 py-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                                        <p className="text-black font-bold text-[11px] mb-1">
                                                            Defect List
                                                        </p>
                                                        <div className="w-full flex flex-row justify-between items-center">

                                                            <p className="text-black text-semibold text-[10px] mb-1">
                                                                1. Roof
                                                            </p>
                                                            <p className="text-[9px] font-semibold text-white mb-1 bg-green-500 px-1.5 rounded-lg">Done</p>
                                                        </div>
                                                        <div className="w-full flex flex-row justify-between items-center">

                                                            <p className="text-black text-semibold text-[10px] mb-1">
                                                                2. Ceiling
                                                            </p>
                                                            <p className="text-[9px] font-semibold text-white mb-1 bg-teal-500 px-1.5 rounded-lg">Pending</p>
                                                        </div>
                                                        <div className="w-full flex flex-row justify-between items-center">

                                                            <p className="text-black text-bold text-[10px] mb-1">
                                                                3. Wall
                                                            </p>
                                                            <p className="text-[9px] font-semibold text-black mb-1 bg-yellow-300 px-1.5 rounded-lg">Canceled</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                {/* Bottom Nav Bar */}
                                                <div className="bg-white h-10 px-2 w-full absolute bottom-0 rounded-b-[22px] flex flex-row justify-around items-center">
                                                    <div className="h-4 w-1/4 rounded-md justify-center items-center" style={{}}>
                                                        <p className="text-white text-[10px] text-center" style={{ color: `#${theme}` }}>Monitor</p>
                                                    </div>
                                                    <div className="h-4 w-1/4 rounded-md justify-center items-center" style={{}}>
                                                        <p className="text-white text-[10px] text-center" style={{ color: `#${theme}` }}>Defects</p>
                                                    </div>
                                                    <div className="h-6 w-6 rounded-[50%] flex justify-center items-center" style={{}}>
                                                        <Image alt="" src={"/home2.png"} width={13} height={13} className='' />
                                                    </div>
                                                    <div className="h-4 w-1/4 rounded-md justify-center items-center" style={{}}>
                                                        <p className="text-white text-[10px] text-center" style={{ color: `#${theme}` }}>Reports</p>
                                                    </div>
                                                    <div className="h-4 w-1/4 rounded-md justify-center items-center" style={{}}>
                                                        <p className="text-white text-[10px] text-center" style={{ color: `#${theme}` }}>Settings</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        {showDevice ?
                                            <Image alt="" src={"/iphone.png"} width={250} height={100} className='-ml-[250px]' style={{ zIndex: 99 }} />
                                            : null
                                        }
                                    </div>

                                </div>

                            </div>

                            {/* Endpoint */}
                            <div className="sm: w-full lg:w-1/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-white/10 rounded-lg pt-4 pb-6 px-4 mb-5">
                                <h3 className='text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]'>Theme Color (test)</h3>
                                {/* <SwatchesPicker onChange={(color: any, event: any) => { setTheme(color.hex.substring(1)) }} height={570} /> */}
                                {/* <CirclePicker onChange={(color: any, event: any) => { setTheme(color.hex.substring(1)) }} /> */}
                            </div>
                        </div>

                        <div className="lg:flex lg:flex-row">
                            {/* Demo */}
                            <div className="w-full lg:mx-2 rounded-lg bg-white pt-4 pb-6 px-4 mb-5">
                                <h3 className='text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]'>Application Demo <span className='px-3 py-1 text-white rounded-xl text-[12px]' style={{ backgroundColor: `#${theme}` }}>Your future app.</span></h3>

                            </div>
                        </div>

                        {/* Generate Code Button */}
                        {/* <div className="flex flex-row justify-center my-[50px]">
                            <button
                                onClick={() => {
                                    generateCode()
                                }}
                                className={`text-white dark:text-slate-900 px-5 py-2 rounded-lg font-semibold border-solid border-white hover:border-2 hover:bg-transparent hover:text-white mr-2`}
                                style={{ backgroundColor: `#${theme}` }}
                            >
                                Calculate Price
                            </button>
                        </div> */}

                        {/* Generated Codes */}
                        <div className="w-full lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-black/10 rounded-lg pt-4 pb-6 px-4 mb-5">
                            <h3 className='text-black dark:text-white font-semibold text-[1.8vh] text-right mb-[10px]'>Estimation Cost: {discount}</h3>
                            <div className={`backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-black/10 px-10 py-5 rounded-md border-2 border-gray-200`} style={{ borderColor: `#${theme}` }}> {/* balik */}

                                <p className="text-black text-right font-bold text-[2.3vh] dark:text-white">
                                    RM {(modulePrice + complexityPrice) - discount}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default page