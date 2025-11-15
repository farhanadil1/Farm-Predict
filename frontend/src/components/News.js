import React from 'react'

const News = () => {
  const posts = [
    { title: "Latest Updates in Global Agriculture", img: "https://placehold.co/400x250/F2E8C6/466336?text=News+1" },
    { title: "New Tractor Technology for 2026", img: "https://placehold.co/400x250/466336/FFFFFF?text=News+2" },
    { title: "Organic vs. Conventional Farming", img: "https://placehold.co/400x250/D1D099/466336?text=News+3" },
  ];

  return (
    <div className="bg-white py-16 md:py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12 text-center">Explore Our Latest News & Tips</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-green-900">{post.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">A brief excerpt from the article goes here to give readers a preview...</p>
                <a href="/" className="mt-4 inline-block text-green-700 font-semibold hover:text-green-900">
                  Read More &rarr;
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
