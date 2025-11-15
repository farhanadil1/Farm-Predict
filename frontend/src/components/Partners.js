import React from 'react'

const Partners = () => {
  const partners = [
    {
      id: "1",
      name: "Crop",
      preview: "https://images.unsplash.com/photo-1511735643442-503bb3bd348a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, 
    {
      id: "2",
      name: "Irrigation",
      preview: "https://plus.unsplash.com/premium_photo-1661845609789-635c5e35c4ba?q=80&w=1248&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, 
    {
      id: "3",
      name: "Fertlizer",
      preview: "https://images.unsplash.com/photo-1710666184386-9f42d0227237?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, 
    {
      id: "4",
      name :"Market",
      preview: "https://images.unsplash.com/photo-1610319263685-dffecc4d4a15?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    }
  ];

  return (
    <div className="py-12 px-20 overflow-hidden max-w-7xl mx-auto relative">
      <div 
        className="flex justify-between"
       
      >
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex gap-1 h-12">
              <img 
                src={partner.preview}
                alt={partner.name}
                className="object-cover w-32 rounded-3xl"
              />
              <p className="text-gray-950 opacity-70 mt-1.5 px-3 py-1 font-semibold text-md">
                {partner.name}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Partners;