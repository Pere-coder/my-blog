"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Comment from "@/components/Comment";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation'
import Like from '@/components/Likes';

const Blogdetail = () => {

    const {id} = useParams()
    const [data, setData] = useState(null)
   
    

   

    useEffect (() => {
        axios.get(`https://perecentuari.pythonanywhere.com/blog/${id}`)
        .then(response => {console.log(response.data)
            setData(response.data)})
        .catch(error => {console.log('Error', error)})   
        }, [id]);
   

    if (!data) {
        return <div> <Navbar/><div className="flex justify-center items-center mt-10 h-[500px]">Loading...</div><Footer/></div>;
      }

   


    return ( 
        <>
        
       
        <div className="bg-gray-100">
            <Navbar/>
            <div className="flex flex-col justify-center items-center mt-10">
                <div className="shadow-2xl bg-white w-[300px]  md:w-[700px] lg:w-[900px] text-black justify-center items-center text-center rounded-md">
                    <h1 className="text-[30px] md:text-[50px]  mt-5 font-bold font-custom">{data.blogtitle}</h1>
                    <span className="mt-5">By - {data.firstname} {data.lastname}   {data.date}</span>
                    <hr className="mt-3"/>
                    <div className="w-[250px] h-[100px] md:w-[600px] md:h-[400px] mx-auto flex items-center justify-center mt-10 bg-no-repeat bg-cover bg-center rounded-md" style={{
                         backgroundImage: `url(${data.image})`,
                    }}></div>
                    <p className="mt-7 text-[10px] md:text-[20px] p-5 font-sans">{data.blog}</p>
                    <Like/>

                    <Comment/>
                   
                </div>
              

            </div>
            <Footer/>
        </div>
        </>);
}
 
export default Blogdetail;