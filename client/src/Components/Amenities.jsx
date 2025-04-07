import React from 'react';

const amenities = [
  { name: "CCTV Surveillance", image: "/src/assets/logo.jpeg" },
  { name: "Gymansium", image: "/src/assets/logo.jpeg" },
  { name: "Garden", image: "/src/assets/logo.jpeg" },
  { name: "Gazebo", image: "/src/assets/logo.jpeg" },
  { name: "Kids Play Area", image: "/src/assets/logo.jpeg" },
  { name: "Video Door Phone", image: "/src/assets/logo.jpeg" },
];

const Amenities = () => {
  return (
    <div id="amenities" className="pt-2 pr-4 pb-4 bg-gray-50 w-full lg:w-[78%]">
      <div className='p-10 bg-white'>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Amenities Of Balaji Vishant</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-3 left-4 w-full h-8 bg-gradient-to-r from-black/70 via-black/40 to-transparent px-3 flex items-center">
              <span className="text-white text-sm font-semibold">{item.name.toUpperCase()}</span>
            </div>
          </div>
        ))}
        </div>
        </div>
    </div>
  );
};

export default Amenities;
