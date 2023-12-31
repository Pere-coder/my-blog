"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';




const Form = () => {

    const [formData, setFormData] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };


    const postForm = (event) => {
        event.preventDefault();
        const form = new FormData();


         // Add text fields to the form data
      for (const key in formData) {
      form.append(key, formData[key]);
     }

    // Append the image to the form data
     const imageInput = document.querySelector('input[name="image"]');
      if (imageInput.files && imageInput.files[0]) {
      form.append('image', imageInput.files[0]);
      }
        axios.post('https://perecentuari.pythonanywhere.com/blog/', form , {
          headers: {
            'Content-Type': 'multipart/form-data', // Important to set the content type correctly
          },
        })
       
        .then(response => {
        console.log(response.data);
        setSuccessMessage('your Blog/Article has been succesfully submitted')
        setFormData({'formData': null})
  })

  .catch(error => {
    console.error('Error:', error);
    setSuccessMessage('An error has occured, please fill all fields')
    setFormData({'formData': null})
  });

    }

    

    return ( 
    
    
    <div className=''>
    
    
    <div class="flex items-center min-h-screen bg-gray-100 ">

      <div class="container mx-auto p-5">
        <div class="max-w-xl mx-auto my-10 bg-white p-5 rounded-md shadow-2xl">
          <div class="text-center">
          {successMessage && <div className='flex  justify-center items-center text-green-500 font-roboto'>{successMessage}</div>}
            <h1 class="my-3 text-3xl font-semibold text-black dark:text-gray-200 font-custom">
              Submit Blog/Article
            </h1>
           
          </div>
          <div class="mt-5">
            <form  method="POST" id="form" >
            
              <div class="flex mb-6 space-x-4">
                <div class="w-full md:w-1/2 font-roboto">
                
                  <label for="fname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400 ">First Name</label>
                  <input onChange={handleChange} type="text" name="firstname" id="first_name" placeholder="first name" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                </div>
                <div class="w-full md:w-1/2 font-roboto">
                  <label for="lname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Last Name</label>
                  <input onChange={handleChange} type="text" name="lastname" id="lname" placeholder="last name" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                </div>
              </div>

              <div class="flex mb-6 space-x-4 font-roboto">
                <div class="w-full md:w-1/2">
                  <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                  <input onChange={handleChange} type="email" name="email" id="email" placeholder="you@gmail.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                </div>

                <div class="w-full md:w-1/2 font-roboto">
                  <label for="phone" class="block text-sm mb-2 text-gray-600 dark:text-gray-400">Phone Number</label>
                  <input onChange={handleChange} type="text" name="phone" id="phone" placeholder="+234**********" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                </div>
              </div>
              <div class="mb-6 font-roboto">
                <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Blog/Article title</label>
                <input onChange={handleChange} type="text" name="blogtitle" id="phone" placeholder="blog'article title" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
              </div>

              <div class="mb-6 font-roboto">
                <label for="image" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Blog/Article Image</label>
                <input onChange={handleChange} type="file" name="image" required class="text-gray-300  w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
              </div>

              <div class="mb-6 font-roboto">
                <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Blog/Article</label>

                <textarea onChange={handleChange} rows="5" name="blog" id="message" placeholder="Your Blog/article" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" ></textarea>
              </div>
              <div class="mb-6 font-roboto" >
                <button onClick={postForm} type="submit" class="w-full px-3 py-4 text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  rounded-md  focus:outline-none">
                  Send Blog/article
                </button>
              </div>
              <p class="text-base text-center text-gray-400" id="result"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
        
  </div> );
}
 
export default Form;