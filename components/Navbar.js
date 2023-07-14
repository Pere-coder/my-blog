"use client"
import React from 'react'
import {BsSearch, } from 'react-icons/bs'
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
                    <div className="flex gap-2 bg-gray-200 w-[200px] h-[30px] p-2 justify-start items-center rounded-xl"><input  type='text' className='appearance-none border-none outline-none w-[150px] bg-gray-200' /><BsSearch className='cursor-pointer'  size={20}/></div>
                </nav>

                <nav className="flex flex-col items-center justify-center p-5 h-[120px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white ">
                    <div className="flex w-full justify-between">
                        <h1 className="text-[40px]  md:text-[40px]">Blogs/News</h1>
                        <div className="flex justify-center items-center md:hidden " onClick={btn}><FaBars size={30}/></div>
                    </div>
                    <ul className="hidden  md:flex items-start justify-center mx-auto gap-10 mt-5">
                        <li className="border-r-2 border-white w-[150px] cursor-pointer" onClick={(e) => {e.preventDefault(); setIsOpen(false)}}>Home</li>
                        <li className="border-r-2 border-white w-[150px] cursor-pointer" onClick={(e) => {e.preventDefault(); setIsOpen(false)}}>Breaking news</li>
                        <div>
                            <li className="border-r-2 border-white w-[150px] cursor-pointer ml-12"  onClick={toggleDropdown}>Categories</li>
                            {isOpen && (
                                <ul className="absolute mx-0 flex flex-col justify-center w-[170px] mt-2  bg-white border  shadow-lg text-sm">
                                
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
                            <li className="border-r-2 border-white w-[150px] cursor-pointer ml-10" onClick={tDropdown}>Who we are</li>
                            {Open && (
                                <ul className="absolute mx-0 flex flex-col justify-center w-[170px] mt-2  bg-white border  shadow-lg text-sm">
                                
                                    <li>
                                        <a href="#" onClick={(e) => {e.preventDefault(); setOpen(false)}} className="flex justify-center text-gray-800 hover:bg-gray-200">
                                        About Us</a>
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
                        <li className="border-r-2 border-white w-[150px] cursor-pointer" onClick={(e) => {e.preventDefault(); setIsOpen(false)}}>Submit your article</li>
                        <li className="border-r-2 border-white w-[150px] cursor-pointer" onClick={(e) => {e.preventDefault(); setIsOpen(false)}}>Follow us</li>
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
                            onClick={() => setOpen(false)}
                            >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        </Transition.Child>
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                        <div className="px-4 sm:px-6">
                           
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6  ">
                            <ul className="flex flex-col gap-10 justify-center items-center ">
                            <div className='flex'><div className="text-[#0479CE] font-700  text-[40px] leading-28 font-poppins ">HISC </div><div className="text-[6px] leading-[9px] mt-0 w-[50px] md:hidden text-[#1F1F1F]">Heartfulness International <br/>  Sports Center</div></div>

                            <div className=" mt-20 font-roboto font-500 text-26 leading-80 flex flex-col justify-center items-center text-center">
                                <Link href='' className="cursor-pointer">Home</Link>
                                <Link href='' >About Us</Link>
                                <Link href="" className="cursor-pointer">Facility</Link>
                            </div>
                                

                            <li className="bg-[#0479CE]  text-white text-center flex items-center justify-center  text-13.85 font-500 font-roboto leading-16.23 rounded-3xl w-175 h-52  mt-[65px]">
                            SIGN UP NOW
                            
                        </li>
                        
                            
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