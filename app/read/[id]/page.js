"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation'

const blogdetail = () => {

    const {id} = useParams()
    const [data, setData] = useState(null)

    


    useEffect (() => {
        axios.get(`http://127.0.0.1:8000/blog/${id}`)
        .then(response => {console.log(response.data)
            setData(response.data)})
        .catch(error => {console.log('Error', error)})   
    }, [id]);
   

    if (!data) {
        return <div> <Navbar/><div className="flex justify-center items-center mt-10">Loading...</div><Footer/></div>;
      }
    return ( 
        <div>
        <Navbar/>
        <div className="flex flex-col justify-center items-center mt-10">
            <div className="border border-gray-300 w-[300px]  md:w-[900px] text-black justify-center items-center text-center rounded-md">
            <h1 className="text-xl mt-5">{data.blogtitle}</h1>
            <span className="mt-5">By - {data.firstname} {data.date}</span>
            <hr className="mt-3"/>
            <p className="mt-7 p-5">{data.blog}</p>

            </div>

        </div>
        <Footer/>
        </div>);
}
 
export default blogdetail;