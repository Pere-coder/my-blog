"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Image from 'next/image'



const weather = () => {
    const [weather, setWeather] = useState({});
    const [error, setError] = useState(null);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

    const fetchweather = () => {
        axios.get(url).then((res) => {
            setWeather(res.data);
            setError(null)
        })
        .catch((error) => {
            setError('An error occured while fecthing weather!')
            setWeather({})
            
        })
 };
//  useEffect(() => {
//     fetchweather();
//   }, []);
// console.log(weather)

const list = Object.values(weather)
const third = list[3]


console.log(third)
    return ( <div className=" mt-10 flex flex-wrap justify-center  gap-10">
                
                <p className='bg-black w-[400px] h-[300px] text-white'>
                {weather.name}{weather.timezone}
                    <button onClick={fetchweather} className='bg-green-500 w-[100px] h-[50px]'>click</button>
                </p>
                
            </div> );
}
 
export default weather;