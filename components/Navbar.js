const Navbar = () => {
    return ( <div className="flex flex-col justify-center">
                <nav className="flex  items-center text-center w-full justify-between  h-[50px] p-5">
                    <div className="text-[20px] md:text-[30px] ">Gixblog</div>
                    <ul className="hidden md:flex text-center justify-center gap-5 font-[500px]">
                        <li className="">Home</li>
                        <li className="">Categories</li>
                        <li className="">Who we are</li>
                        <li className="">Submit article</li>
                        
                    </ul>
                    <div className="md:hidden">nav icon</div>
                    <div className="md:hidden">Search icon</div>
                    <div className="hidden md:block"><input type="text" placeholder="search"/></div>
                </nav>

                <nav className="flex flex-col items-center justify-center p-5 h-[120px] bg-red-500 text-white ">
                    <div className="flex w-full justify-between">
                        <h1 className="text-[40px]  md:text-[40px]">Breaking news</h1>
                        <h1 className="md:hidden">Icon</h1>
                    </div>
                    <ul className="hidden  md:flex items-start mx-auto gap-10 mt-5">
                        <li className="border-r-2 border-white w-[150px]">Top stories</li>
                        <li className="border-r-2 border-white w-[150px]">Tech stories</li>
                        <li className="border-r-2 border-white w-[150px]">Tech stories</li>
                        <li className="border-r-2 border-white w-[150px]">Tech stories</li>
                        <li className="border-r-2 border-white w-[150px]">Tech stories</li>
                        <li className="border-r-2 border-white w-[150px]">Tech stories</li>
                        <li className="border-r-2 border-white w-[150px]">Tech stories</li>
                    </ul>
                    
                    
                </nav>

            </div> );
}
 
export default Navbar;