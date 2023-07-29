"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import { useState } from 'react'
import {BsSearch, BySearch} from 'react-icons/bs'
import { ImWarning } from "react-icons/im";
import Weather from '@/components/Weather'




const inter = Inter({ subsets: ['latin'] })

export default function Weatherdisplay() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);




  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      setError(null)
      // console.log(response.data);
    })
    .catch((error) => {
      setError('An error occured while fetching the weather.')
      setWeather({})
      setCity('')
    });
    setCity('');
    setLoading(false);
  };
//  if (error){
//     return  <div className='flex flex-col mx-auto mt-10 w-[300px] md:w-[700px] p-5 h-[300px] md:h-[400px] rounded-md bg-blue-500 bg-url'>
//                 <div className=' bg-black/40 '/>
//                     <div className='flex justify-center items-center  text-white'>
//                     <form onSubmit={fetchWeather} className='flex  items-center w-[200px] h-[30px] rounded-md p-5 bg-transparent border border-gray-300 text-black '>
//                         <div className='flex gap-2'>
//                         <input onChange={(e) => setCity(e.target.value)}
//                         className='w-[120px] bg-transparent border-none text-white focus:outline-none text-[20px]' type="text" placeholder='Search city'/>
//                         <button onClick={fetchWeather}><BsSearch size={20} className='text-white'/></button>
//                         </div>
                       
//                     </form>
//                 <div className='text-red-500 absolute text-[15px] mt-[400px] w-[300px] bg-black/50 p-2 rounded-md'><div className='m-5 flex justify-center items-center hover:cursor-pointer '></div>{error}.......
//                     Please enter a valid city or check your internet connection</div>
//                 </div>
       
  

//          {weather.main && <Weather data={weather}/>}
  
  
  
  
  
//       </div>
  
//   }
  
    return (
      <div className='flex flex-col mx-auto mt-10 w-[300px] md:w-[700px] p-5 h-[300px] md:h-[400px] rounded-md bg-blue-500'>
  
      <div className='flex flex-col bg-black/40 '/>
         <div className='flex justify-center items-center  text-white'>
        
          <form onSubmit={fetchWeather} className='flex  items-center w-[200px] h-[30px] rounded-md p-5 bg-transparent border border-gray-300 text-black '>
            <div className='flex gap-2'>
              <input onChange={(e) => setCity(e.target.value)}
               className='w-[120px] bg-transparent border-none text-white focus:outline-none text-[20px]' type="text" placeholder='Search city'/>
                <button onClick={fetchWeather}><BsSearch size={20} className='text-white'/></button>
            </div>
           
          </form>
       
         </div>
         {error && <div className='flex flex-col justify-center items-center text-center mt-10 text-red-500'><ImWarning size={20}/>{error}</div>}
  
  
         {/* weather */}
  
         {weather.main && <Weather data={weather}/>}
  
  
  
  
  
      </div>
  
    )
  
  
  }
  
  