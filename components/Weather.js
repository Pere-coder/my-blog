"use client"
import { useState } from 'react' 
import React from 'react';



const weather = () => {
    return ( <div className=" mt-10 flex flex-wrap justify-center  gap-10">
                <div className='bg-black w-[400px] h-[300px]'></div>
                <div className='bg-red-500 w-[400px] h-[300px]'></div>
                <div className='bg-red-500 w-[400px] h-[300px]'></div>
            </div> );
}
 
export default weather;