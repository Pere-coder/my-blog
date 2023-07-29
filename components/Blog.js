

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
                <Link key={blog.id} href={`/read/${blog.id}`}  className="cursor-pointer">
                <div
                  
                  className="shadow-2xl hover:scale-105 ease-in-out duration-300   bg-no-repeat bg-cover h-[300px] w-[300px] text-white  items-start text-start rounded-md"
                  style={{
                    backgroundImage: `url(${blog.image})`,
                  }}
                >
                  <div className="flex flex-col p-5"> <h1 className="flex mt-[200px]  text-[15px] md:text-[15px] " >{blog.blogtitle}</h1>
                    <span className=" text-[5px] md:text-[10px] text-gray-100 mt-2">
                      By - <span className="bg-blue-500 p-2 rounded-md">{blog.firstname}</span> {blog.date}
                    </span>
                </div>
                  
              
                </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="shadow-xl w-[300px] md:w-[400px] h-[400px] text-black  flex justify-center items-center text-center mt-10 rounded-md">
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
