"use client"
import React from 'react'
import {BsSearch, } from 'react-icons/bs'
import React from "react";
import { ImWarning } from "react-icons/im";
import {FaBars} from "react-icons/fa"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import Link from "next/link";




const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);
const [Open, setOpen] = useState(false);

const [op, setOp] = useState(false)
const [ isHidden, setIsHidden ] = useState(true)
const btn = () => {
        setOp(true);
    }






const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

const click = () => {
        setIsOpen(isOpen);
    }


const tDropdown = () => {
    setOpen(!Open);
};

const klick = () => {
    setOpen(!Open);
}

    return ( <div className="flex flex-col justify-center" >
        
                <nav className="flex  items-center text-center w-full justify-between  h-[50px] p-5">
                    <div className="text-[20px] md:text-[30px] ">Gixblog</div>
                    <ul className="hidden md:flex text-center justify-center gap-5 font-[500px]">
                        <h1>Your one stop news and blog platform.....</h1>  
                    </ul>
                    <div className="flex gap-2 p-2 justify-start items-center"><input  type='text' className=' w-[200px] bg-white  placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300' /><BsSearch className='cursor-pointer'  size={20}/></div>
                </nav>

                <nav className="flex flex-col items-center justify-center p-5 h-[120px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white ">
                    <div className="flex w-full justify-between">
                        <h1 className="text-[40px]  md:text-[40px]">Blogs/News</h1>
                        <div className="flex justify-center items-center cursor-pointer md:hidden " onClick={btn}><FaBars size={30}/></div>
                    </div>
                    <ul className="hidden  md:flex items-start justify-center mx-auto gap-4 mt-5">
                        <li className=" flex justify-center mx-auto p-2 cursor-pointer hover:border-r-2 hover:border-l-2 border-white" onClick={(e) => {e.preventDefault(); setIsOpen(false)}}><Link href='/'>Home</Link></li>
    
                        <div>
                            <li className="flex justify-center items-center text-center p-2 cursor-pointer mx-auto hover:border-r-2 hover:border-l-2 border-white"  onClick={toggleDropdown}>Categories</li>
                            {isOpen && (
                                <ul className="absolute mx-0 flex flex-col justify-center w-[120px]  bg-white   shadow-lg text-sm">
                                
                                    <li>
                                        <a href="#" onClick={(e) => {e.preventDefault(); setIsOpen(false)}} className="flex justify-center text-gray-800 hover:bg-gray-200">
                                        Education</a>
                                    </li>
                                    <li>
                                        <a href="#"  onClick={(e) => {e.preventDefault(); setIsOpen(false)}} className="flex justify-center text-gray-800 hover:bg-gray-200">
                                        Entertainment</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => {e.preventDefault(); setIsOpen(false)}} className="flex justify-center text-gray-800 hover:bg-gray-200">
                                        Politics</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => {e.preventDefault(); setIsOpen(false)}} className="flex justify-center text-gray-800 hover:bg-gray-200">
                                        Culture</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => {e.preventDefault(); setIsOpen(false)}} className="flex justify-center text-gray-800 hover:bg-gray-200">
                                        Religion</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => {e.preventDefault(); setIsOpen(false)}} className="flex justify-center text-gray-800 hover:bg-gray-200">
                                        Culture</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => {e.preventDefault(); setIsOpen(false)}} className="flex justify-center text-gray-800 hover:bg-gray-200">
                                        Lifestyle</a>
                                    </li>
                                </ul> )}
                         </div>
                        <div>
                            <li className="flex justify-center p-2 cursor-pointer hover:border-r-2 hover:border-l-2 border-white" onClick={tDropdown}>Who we are</li>
                            {Open && (
                                <ul className="absolute mx-0 flex flex-col justify-center w-[100px]  bg-white border  shadow-lg text-sm">
                                
                                    <li>
                                        <Link href="/about"  className="flex justify-center text-gray-800 hover:bg-gray-200">
                                        About Us</Link>
                                    </li>
                                    <li>
                                        <a href="#"  onClick={(e) => {e.preventDefault(); setOpen(false)}} className="flex justify-center text-gray-800 hover:bg-gray-200">
                                        Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => {e.preventDefault(); setOpen(false)}} className="flex justify-center text-gray-800 hover:bg-gray-200">
                                        FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={(e) => {e.preventDefault(); setOpen(false)}} className="flex justify-center text-gray-800 hover:bg-gray-200">
                                        Career</a>
                                    </li>
                                 
                                </ul> )}

                        </div>
                        <li className="flex justify-center p-2 cursor-pointer hover:border-r-2 hover:border-l-2 border-white" onClick={(e) => {e.preventDefault(); setIsOpen(false)}}><Link href='/submit'>Submit your article</Link></li>
                        <li className=" flex justify-center p-2  cursor-pointer hover:border-r-2 hover:border-l-2 border-white" onClick={(e) => {e.preventDefault(); setIsOpen(false)}}>Follow us</li>
                    </ul>

                    
                    
                    
                </nav>


            <Transition.Root show={op} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
    
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
                    <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                    >
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                        <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <div className="absolute left-3 top-2 ml-0   flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                            <button
                            type="button"
                            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOp(false)}
                            >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        </Transition.Child>
                        <div className="flex h-full flex-col overflow-y-scroll bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-6 shadow-xl">
                        <div className="px-4 sm:px-6">
                           
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6  ">
                            <ul className="flex flex-col gap-10 justify-center items-center ">
                            <div className=" text-[50px]">Gixblog </div>

                            <div className="flex flex-col justify-center items-center gap-7 mt-20 text-[25px]">
                                <Link href='/' className="cursor-pointer hover:border-r-2 hover:border-l-2 border-white p-5">Home</Link>
                                <Link href='' className="cursor-pointer hover:border-r-2 hover:border-l-2 border-white p-5">Breaking news</Link>
                                <Link href="" className="cursor-pointer hover:border-r-2 hover:border-l-2 border-white p-5">Categories</Link>
                                <Link href="/about" className="cursor-pointer hover:border-r-2 hover:border-l-2 border-white p-5">Who we are</Link>
                                <Link href="/submit" className="cursor-pointer hover:border-r-2 hover:border-l-2 border-white p-5">Submit an article</Link>
                            </div>
                                

                          
                            
                            </ul>
                            
                            </div>
                        </div>
                    </Dialog.Panel>
                    </Transition.Child>
                </div>
                </div>
            </div>
            </Dialog>
        </Transition.Root>


            </div> );
}
 
export default Navbar;