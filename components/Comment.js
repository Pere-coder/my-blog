"use client"
import axios from "axios";
import Cpost from '@/components/Cpost'
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation'


const Comment = () => {
    const [formData, setFormData] = useState({});
   


    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

      const comment = async (event) => {
        // event.preventDefault();
        try {
            const res = await axios.post('https://perecentuari.pythonanywhere.com/comment/', formData);
            console.log(res.data);
            setFormData({'formData': null})
        }catch (error){
            console.log(error)
            setFormData({'formData': null})
        }
    }


 
    return ( 
    
        <>
         <hr className="mt-3"/>
                    <div className="flex flex-col ">
                        <Cpost/>
                        <div className='p-5'>
                            <form className="items-center  w-full flex flex-col justify-center  p-5 shadow-xl rounded-md h-[200px] mt-5">
                                <textarea onChange={handleChange} rows="5" name="comment" id="message" placeholder="enter your comment" required class="w-full p-5 h-[50px]  px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" ></textarea>
                                <button onClick={comment} type="submit" class="mt-5 flex justify-center items-center w-full p-5 h-[20px] px-3 py-4 text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  rounded-md  focus:outline-none">
                                    Publish
                                </button>
                            </form>
                        </div>
                
                    </div>

        </> 
    );
}
 
export default Comment;