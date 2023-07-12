const footer = () => {
    return ( <div className="w-full h-[200px] bg-gray-700 mt-20">
        <div className="flex flex-col justify-center items-center">
            <div className="mt-10 text-white">Suscribe to our news letter</div>
            <div className="flex justify-center text-white mt-5 ">
                   <div className="bg-gray-200 w-[400px] p-5 rounded-3xl flex justify-center  "><input className='bg-gray-200 w-[400px] appearance-none border-none outline-none text-black' type="text" name="email"/></div>
                    
                </div>
            </div>     
        </div> );
}
 
export default footer;