"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const News = () => {
    const [data, dataUpdate] = useState([])


    const fetch = () => {
        axios.get('https://perecentuari.pythonanywhere.com/news/')
        .then((response) =>  {(response.data)
        console.log(data)
        dataUpdate(response.data)})
        .catch((err) => {
            console.log('Error', err)
        })


    }

    useEffect(() => {
        fetch();
      }, []);




    return (
      
        <div className='mt-10 bg-white rounded-md w-[300px] p-5'>
          <div className='flex justify-center text-[30px] mt-10 font-bold font-custom'>Breaking news</div>
            {data.length > 0 ? (
          <div className='flex flex-col justify-center items-center'>
            {data.map((news) => 
            <div key={news.id} className= ' font-roboto p-5 shadow-2xl hover:scale-105 ease-in-out duration-300   bg-no-repeat bg-cover bg-center  w-[250px] text-white  items-start text-start rounded-md mt-5'
             style={{
                backgroundImage: `url(${news.image})`,
              }}>
                 <h1 className='mt-[100px] text-[20px]'>{news.News_title}</h1>
                 <p className='text-[10px]'>{news.News}</p>

            </div>
           
            
            
            )}

          </div>
          ): <div  className='shadow-2xl hover:scale-105 ease-in-out duration-300 text-black flex justify-center items-center p-5 rounded-md'>Loading...</div>}
          </div>

    )}
 
export default News;