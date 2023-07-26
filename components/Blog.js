// "use client"
// import axios from "axios";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// const Blog = () => {

//     const [data, setData] = useState([]);
//     const [searchQuery, setSearchQuery] = useState("");

//     function truncateText(text, maxLength) {
//         return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
//       }


//     const fetchData = (searchQuery) => {
//         let url = "http://127.0.0.1:8000/blog/"
//         if (searchQuery){
//             url += `?search=${encodeURIComponent(searchQuery)}`;

//         }

//         axios.get(url)
//         .then(response => {console.log(response.data)
//                 setData(response.data)})
//         .catch((error) => {console.log("Error", error);
//         });

//         useEffect(() => {fetchData(searchQuery)}, [searchQuery]);
    
//     return ( 
//     <div className="flex flex-col justify-center items-center">
//         <div className="flex justify-center items-center mt-10 text-[40px]">Blogs & Articles</div>
//         <input type="text" className="bg-white w-[200px] md:w-[400px] h-[35px] p-5 mt-5 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" placeholder="Search blogs and aticles"/>
        
//         {data.length > 0 ? (<div className="flex flex-wrap justify-center mt-10 gap-2">
//             {data.map(blog => (
//             <div className="border border-gray-300 w-[300px] md:w-[400px] text-black justify-center items-center text-center rounded-md">
//                 <div>
//                     <h1 className="text-xl mt-5">{blog.blogtitle}</h1>
//                     <span className="mt-5">By - {blog.firstname} {blog.date}</span>
//                     <hr className="mt-3"/>
//                     <p className="mt-7 p-5">{truncateText(blog.blog, 150)}</p>
//                     <Link href={`/read/${blog.id}`}><h1 className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white p-2 rounded-md w-[200px] mx-auto mb-5">Read more</h1></Link>
//                 </div>
//             </div>
//             ))} </div>
//         ):(<div className="border border-gray-300 w-[500px] h-[400px] text-black text-[40px] justify-center items-center text-center mt-10 rounded-md">No blogs posted</div>)
//         }
//      </div>);
// }
 
// export default Blog;


"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import News from "./News";

const Blog = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  }

  const fetchData = (searchQuery) => {
    let url = "http://127.0.0.1:8000/blog/";
    if (searchQuery) {
      url += `?search=${encodeURIComponent(searchQuery)}`;
    }

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    fetchData(searchQuery);
  }, [searchQuery]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-wrap gap-10 justify-center">
    <div>
    <div className="flex flex-col justify-center items-center bg-white mt-10 rounded-md p-5">
      <div className="flex justify-center items-center mt-10 text-[40px]">
        Blogs & Articles
      </div>
      <input
        type="text"
        className="bg-white w-[200px] md:w-[400px] h-[35px] p-5 mt-5 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        placeholder="Search blogs and articles"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      {data.length > 0 ? (
        <div className="flex flex-wrap justify-center mt-10 md:w-[720px] gap-4 ">
          {data.map((blog) => (
            <Link  href={`/read/${blog.id}`}  className="cursor-pointer">
            <div
              key={blog.id}
              className="shadow-2xl hover:scale-105 ease-in-out duration-300   bg-no-repeat bg-cover h-[200px] md:h-[300px] w-[300px] md:w-[300px] text-white  items-start text-start rounded-md"
              style={{
                backgroundImage: `url(${blog.image})`,
              }}
            >
              <div className="flex flex-col p-5"> <h1 className="flex mt-[200px]  text-[15px] md:text-[15px] ">{blog.blogtitle}</h1>
                <span className=" text-[5px] md:text-[10px] text-gray-100 mt-2">
                  By - <span className="bg-blue-500 p-2 rounded-md">{blog.firstname}</span> {blog.date}
                </span>
            </div>
               
           
            </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="border border-gray-300 w-[300px] md:w-[400px] h-[400px] text-black  justify-center items-center text-center mt-10 rounded-md">
          No blogs posted
        </div>
      )}
    </div>
    </div>
    <News/>
   </div>
  );
};

export default Blog;
