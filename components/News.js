"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const News = () => {
    const [data, dataUpdate] = useState([])


    const fetch = () => [
        axios.get('http://127.0.0.1:8000/news/')
        .then((response) =>  {(response.json)
        dataUpdate(response.data)})
        .catch((err) => {
            console.log('Error', err)
        })


    ]




    return (
        
        <div className="bg-white mt-10 rounded-md">
        <div className='text-black flex flex-col   md:w-[300px] text-center mt-10 text-[20px] '>
            
            <h1>Breaking News</h1>
            <div className="p-5 ">
            <h1 className="text-[20px]">Babangida ate the meat</h1>
                <p className="text-[10px]">skdfgjklfdsldkfjngfkdmfdkmcninvjgi noooo
                    kfjgktkjkkkkkkkkkkkkkkkkkkkkkkkk kgfdg
                    nfjgngjgonkgkijlgkgl kgjkgjiotoigtigte
                    ljgngfjlgnfjltngjtngnljtgntgntgjntgnt
                    fnbfhgbrgrjgjgnjtngjngjtngjtngotgoiot
                    kgnrgjrgrngotogntgntjnjrtgnjtngjtlnglt
                    jkfngjfngjernggiotjioetjiojgijtglknfgj
                    ,gmnjtgnjtognkijgokjengjjnojngoir fnbfhgbrgrjgjgnjtngjngjtngjtngotgoiotfjg
                </p>
            </div>
        </div>
        </div>
        );
}
 
export default News;