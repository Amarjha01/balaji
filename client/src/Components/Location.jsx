import React from "react";

const MapSection = () => {
  return (
    <section id="location" className="bg-gray-50 pt-3 md:pr-4 md:pb-4 w-full lg:w-[78%]">
      <div className="bg-white p-10">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl mb-6">Location of Balaji Vishant</h2>

      {/* Map and Location Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left: Map View */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-center mb-4">Map View</h2>
          <div className="border rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.651384132704!2d72.948547!3d19.169199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7959fc64fbd2f%3A0x4aab64f4f03416ed!2sThakurli%20Station!5e0!3m2!1sen!2sin!4v1648882783247!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
              className="w-full"
            ></iframe>
          </div>
        </div>

        {/* Right: Location Map Image */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-4">Location Map</h2>
          <div className="relative w-full group overflow-hidden h-[300px]">
      <img
        src="/src/assets/costing.webp"
        alt="Costing Details"
        className="w-full h-[300px] border cursor-pointer"
      />
            <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 h-0 group-hover:h-full transition-all duration-500 ease-in-out"></div>
            <button className= "absolute inset-x-0 top-[-100%] text-white border-1  bg-black/75 cursor-pointer text-lg w-[70%] ml-[15%] px-3 py-2 rounded-md group-hover:top-[40%] transition-all duration-700 ease-in-out" >
              Hover me
            </button>
          </div>
        </div>
      </div>

      {/* Landmarks List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6 text-gray-800 text-base font-medium">
        <p>📍 Dombivli Railway Station - 2 KM</p>
        <p>📍 Thakurli Railway Station - 1 KM</p>
        <p>📍 Model College - 200 Metre</p>
        <p>📍 Greenwood International School - 200 Metre</p>
        <p>📍 Manjunath College - 100 Metre</p>
      </div>

        </div>
    </section>
  );
};

export default MapSection;
