"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Email = () => {

    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

    const postData = async () => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/', formData);
            console.log(response.data);
        }catch (error){
            console.log(error)
        }
    };
    return ( <>

        <form className="flex flex-col justify-center items-center" method='POST'>
            <div className="mt-10 text-white text-[30px]">Suscribe to our news letter</div>
            <div className="flex flex-col justify-center text-white mt-5 ">
                   <div className="bg-gray-200 w-[400px] p-5 rounded-3xl flex justify-center  "><input className='bg-gray-200 w-[400px] appearance-none border-none outline-none text-black' type="text" name="email" placeholder="Enter your email " onChange={handleChange}/></div>
                    <button className="bg-green-500 text-[20px]  w-[200px] h-[50px] rounded-2xl flex justify-center items-center mx-auto mt-5 hover:bg-white hover:text-green-500 " onClick={postData}>Suscribe</button>
                </div>
        </form>     
    </> );
}
 
export default Email;