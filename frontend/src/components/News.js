import React from 'react'
import { CiCircleMore } from "react-icons/ci";

const News = () => {
  const posts = [
    { 
      title: "Latest Updates in Global Agriculture",
      date: "18 AUGUST, 2025",
      img: "https://images.unsplash.com/photo-1620200423727-8127f75d7f53?q=80&w=1170&auto=format&fit=crop"
    },
    { 
      title: "New Tractor Technology for 2026",
      date: "29 SEPTEMBER, 2025",
      img: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=1182&auto=format&fit=crop"
    },
    { 
      title: "Organic vs. Conventional Farming",
      date: "18 NOVEMBER, 2025",
      img: "https://plus.unsplash.com/premium_photo-1678751640165-38e3ff1999c6?q=80&w=1170&auto=format&fit=crop"
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs font-medium text-orange-500 border border-orange-400 w-fit py-1 px-2 rounded-lg mb-3">
          LATEST NEWS
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800 leading-tight">
            Explore Our Latest <br className="hidden md:block" />
            News & Tips
          </h2>

          <a href='https://krishijagran.com/' target='blank'>
            <button className="bg-orange-200 px-5 sm:px-6 py-3 rounded-lg text-black font-medium text-sm shadow-xl hover:scale-105 transition-all duration-300">
              Read More
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="overflow-hidden cursor-pointer">
              
              <img 
                src={post.img} 
                alt={post.title} 
                className="w-full h-48 sm:h-52 md:h-56 rounded-lg object-cover shadow-md"
              />

              <div className="py-4 text-left">
                <h3 className="text-xs sm:text-sm font-medium text-gray-500">{post.date}</h3>

                <h3 className="font-semibold text-lg sm:text-xl text-gray-800 mt-2 leading-snug hover:text-gray-900 transition-colors">
                  {post.title}
                </h3>

                <a 
                  href="https://krishijagran.com/" target='blank' 
                  className="mt-2 flex items-center text-green-700 font-semibold hover:text-green-900 transition-colors"
                >
                  Read More 
                  <CiCircleMore className="ml-1 mt-[2px]" size={20} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default News;
