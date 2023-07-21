"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Email = () => {

    const [formData, setFormData] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

    const postData = async () => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/', formData);
            console.log(response.data);
            setSuccessMessage('your Email has been succesfully submitted')
            setFormData({'formData': null})
        }catch (error){
            console.log(error)
            setSuccessMessage('an error occured')
            setFormData({'formData': null})
        }
    };
    return ( <>

        <form className="flex flex-col justify-center items-center" method='POST'>
        {successMessage && <div className='flex mt-5 justify-center items-center text-green-500'>{successMessage}</div>}
            <div className="mt-5 text-white flex justify-center text-center text-[15px] md:text-[30px]">Suscribe to our news letter</div>
            <div className="flex flex-col justify-center  mt-5 ">
                <input className='text-black bg-white w-[300px] md:w-[500px] h-[50px] p-5 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 ' type="text" name="email" placeholder="Enter your email " onChange={handleChange}/>
                    <button className="bg-green-500 text-[20px]  w-[200px] h-[50px] rounded-2xl flex justify-center items-center mx-auto mt-5 hover:bg-white hover:text-green-500 text-white " onClick={postData}>Suscribe</button>
                </div>
        </form>     
    </> );
}
 
export default Email;