import React from 'react';

const gallery = [
  { image: "/src/assets/b1.jpg" },
  { image: "/src/assets/b2.jpg" },
  { image: "/src/assets/b3.jpg" },
  { image: "/src/assets/b4.jpg" },
];

const Gallery = () => {
  return (
    <div id="gallery" className="pt-3 md:pr-4 md:pb-4 bg-gray-50 w-full lg:w-[78%]">
      <div className='p-10 bg-white'>
      <h2 className="text-2xl md:text-2xl font-semibold mb-6">Gallery of Balaji Vishant</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-90 object-cover"
            />
          </div>
        ))}
        </div>
        </div>
    </div>
  );
};

export default Gallery;
