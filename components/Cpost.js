"use client"
import { data } from "autoprefixer";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { RxAvatar } from "react-icons/rx";



const Cpost = () => {
    const [com, setCom] = useState([])


    
    const getData = async () => {
        axios.get('http://perecentuari.pythonanywhere.com/comment/')
        .then((info) =>{
            setCom(info.data)
            console.log(info.data);
        }).catch((err) => {
            setCom([])
            console.log(err)
        })
    };
           
        

    useEffect(() => {
        getData();
      }, []);




    return ( <>

                    <h1 className="mt-5 text-[30px]">Post a comment</h1>
                    {com.length > 0 ? (
                        <div className="p-5">
                           
                            {com.map((item) => 
                            <div className="bg-white w-full flex flex-col justify-center items-start p-5 shadow-xl rounded-md h-[100px] mt-5" key={item.id}> <span className='flex gap-5'><div className='text-blue-500'><RxAvatar size={30}/></div> <div className='mt-1'>Demo user</div></span><div className='mt-5'>{item.comment}</div></div>
                            )}
                        </div>
                        ): 
                             <div className="bg-white w-full flex flex-col justify-center items-start p-5 shadow-xl rounded-md h-[100px] mt-5">No comments</div>
                            }
            </> );
}
 
export default Cpost;