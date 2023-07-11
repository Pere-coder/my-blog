"use client"
import React from 'react'
import {BsSearch, } from 'react-icons/bs'
import { ImWarning } from "react-icons/im";
import {FaBars} from "react-icons/fa"
import { useState } from 'react';





const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const click = () => {
        setIsOpen(isOpen);
    }


    return ( <div className="flex flex-col justify-center" >
        
                <nav className="flex  items-center text-center w-full justify-between  h-[50px] p-5">
                    <div className="text-[20px] md:text-[30px] ">Gixblog</div>
                    <ul className="hidden md:flex text-center justify-center gap-5 font-[500px]">
                        <h1>Your one stop news and blog platform.....</h1>
                        
                    </ul>
                   
                    {/* <div className="md:hidden"><BsSearch size={30}/></div> */}
                    <div className="flex gap-2 bg-gray-200 w-[200px] h-[30px] p-2 justify-start items-center rounded-xl"><input  type='text' className='appearance-none border-none outline-none w-[150px] bg-gray-200' /><BsSearch  size={20}/></div>
                </nav>

                <nav className="flex flex-col items-center justify-center p-5 h-[120px] bg-red-500 text-white ">
                    <div className="flex w-full justify-between">
                        <h1 className="text-[40px]  md:text-[40px]">Blogs/News</h1>
                        <div className="flex justify-center items-center md:hidden"><FaBars size={30}/></div>
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
                        <li className="border-r-2 border-white w-[150px] cursor-pointer" onClick={(e) => {e.preventDefault(); setIsOpen(false)}}>Who we are</li>
                        <li className="border-r-2 border-white w-[150px] cursor-pointer" onClick={(e) => {e.preventDefault(); setIsOpen(false)}}>Submit your article</li>
                        <li className="border-r-2 border-white w-[150px] cursor-pointer" onClick={(e) => {e.preventDefault(); setIsOpen(false)}}>Follow us</li>
                    </ul>
                    
                    
                </nav>

            </div> );
}
 
export default Navbar;