import React, { useState } from 'react';
import { AiFillLike } from "react-icons/ai";

const Like = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className='flex border w-[150px] gap-2 ml-5 p-2'>
        <AiFillLike size={20} onClick={handleLikeClick} className='text-pink-500 cursor-pointer'/>
      <div className='text-[15px]'>{likes} {likes === 1 ? 'like' : 'likes'}</div>
    </div>
  );
};

export default Like;
