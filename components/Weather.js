import React from "react";
import Image from "next/image";


const Weather = ({data}) => {
    console.log(data);
    return ( 
    
    
    <div className="flex flex-col justify-between  w-full h-[65vh]  p-4 text-gray-300">
        <div className="flex justify-between mt-5">
            <div className="flex flex-col items-center">
                <Image 
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                alt='/'
                width='50'
                height='50'/>
                <p className="text-[10px] md:text-[20px]">{data.weather[0].main}</p>
            </div>
            <p className="text-[30px] md:text-[40px] ">{data.main.temp.toFixed(0)}&#176;F</p>
        </div>
        {/* bottom */}


        <diV className='bg-black/50  p-5 rounded-md mt-2 '>
            <p className="text-[10px] md:text-[20px] text-center pb-6">Weather in {data.name}</p>
            <div className="flex justify-between text-center">
                <div>
                    <p className="font-bold text-[10px] md:text-[20px]">{data.main.feels_like.toFixed(0)}&#176;</p>
                    <p className="text-[10px] md:text-[20px]">Feels Like</p>
                </div>
                <div>
                    <p className="font-bold text-[10px] md:text-[20px]"> {data.main.humidity}8</p>
                    <p className="text-[10px] md:text-[20px]">Humidity</p>
                </div>
                <div>
                    <p className="font-bold text-[10px] md:text-[20px]">{data.wind.speed.toFixed[0]} MPH</p>
                    <p className="text-[10px] md:text-[20px]">Winds</p>
                </div>
            </div>
        </diV>


    </div>
     );
}
 
export default Weather;