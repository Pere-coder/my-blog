"use client"
import axios from "axios";
import { useState, useEffect } from "react";

const blog = () => {

    const [data, setData] = useState([])


    const fetchData = () => {
        // event.preventDefault()
        axios.get("http://127.0.0.1:8000/blog/",)
        .then(response => {console.log(response.data)
            setData(response.data)})
        .catch(error => {console.log('Error', error)})   
    }
    useEffect(() => {
            fetchData();}, []);

    
    return ( 
    <div className="flex flex-col justify-center items-center">
    <div className="flex justify-center items-center mt-10 text-[40px]">Blogs & Articles</div>
    <input type="text" className="bg-white w-[400px] h-[35px] p-5 mt-5 border border-red-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" placeholder="Search blogs and aticles"/>
    
       {data.length > 0 ? (<div className="flex flex-wrap justify-center mt-10 gap-2">
        {data.map(blog => (
        <div className="bg-red-500 w-[500px] h-[400px] text-white justify-center items-center text-center">
        <div><h1 className="text-xl mt-5">{blog.blogtitle}</h1>
        <span className="mt-5">By - {blog.firstname} {blog.date}</span>
        <hr className="mt-3"/>
        <p className="mt-7 p-5">{blog.blog}</p>
        </div>
        </div>
        ))} </div>
       ):(<div className="bg-red-500 w-[500px] h-[400px] text-white text-[40px] justify-center items-center text-center mt-10">No blogs posted</div>)
       }
        
        
        
        
   

    
     </div>);
}
 
export default blog;