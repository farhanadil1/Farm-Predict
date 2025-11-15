import React from 'react'
import { Link } from 'react-router-dom';
import { CiCircleMore } from "react-icons/ci";


const News = () => {
  const posts = [
    { title: "Latest Updates in Global Agriculture",
      date: "18 AUGUST,2025",
      img: "https://images.unsplash.com/photo-1620200423727-8127f75d7f53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "New Tractor Technology for 2026",
      date: "29 SEPTEMBER,2025", 
      img: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=1182&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Organic vs. Conventional Farming", 
      date: "18 NOVEMBER,2025",
      img: "https://plus.unsplash.com/premium_photo-1678751640165-38e3ff1999c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto px-20">
        <p className='text-xs font-normal text-gray-500 border w-fit py-1 px-2 rounded-lg border-gray-500 mb-2'>
              LATEST NEWS
        </p>
        <div className='flex justify-between items-center'>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-12 text-left">Explore Our Latest <br/>News & Tips</h2>
          <Link to={`/solutions`}>
            <button className='bg-orange-200 px-6 py-3 rounded-lg text-black h-fit items-center
            font-medium text-sm shadow-xl hover:scale-105 transition-all duration-300'>
              Read More
            </button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full rounded-lg h-44 object-cover" />
              <div className="py-4 tetx-left">
                <h3 className="font-medium text-xs text-gray-500">{post.date}</h3>
                <h3 className="font-semibold mt-2 text-lg text-gray-800">{post.title}</h3>
                <a href="/" className="mt-2 items-center flex text-green-700 font-semibold hover:text-green-900">
                  Read More <CiCircleMore className='mt-1 ml-1' size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News
