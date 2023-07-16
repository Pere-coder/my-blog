const blog = () => {
    return ( 
    <div className="flex flex-col justify-center items-center">
    <div className="flex justify-center items-center mt-10 text-[40px]">Blogs & Articles</div>
    <input type="text" className="bg-white w-[400px] h-[35px] p-5 mt-5 border border-red-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" placeholder="Search blogs and aticles"/>
    <div className="flex flex-wrap justify-center mt-10 gap-2">
        <div className="bg-red-500 w-[500px] h-[400px]"></div>
        <div className="bg-red-500 w-[500px] h-[400px]"></div>
        <div className="bg-red-500 w-[500px] h-[400px]"></div>
        <div className="bg-red-500 w-[500px] h-[400px]"></div>
        <div className="bg-red-500 w-[500px] h-[400px]"></div>
        <div className="bg-red-500 w-[500px] h-[400px]"></div>
        
        
        
    </div>

    
     </div>);
}
 
export default blog;