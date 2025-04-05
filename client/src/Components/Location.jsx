import React from "react";

const MapSection = () => {
  return (
    <section className="bg-white px-4 py-10 max-w-7xl lg:w-[78%]">
      {/* Section Heading */}
      <p className="text-sm text-gray-600 mb-2">Address Of Balaji Kanha</p>

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
          <div className="border rounded flex items-center justify-center h-[300px]">
            <img
              src="/map-icon.png" // replace with your icon
              alt="Location Icon"
              className="w-28 h-28 object-contain"
            />
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

      {/* Divider */}
      <div className="border-t mt-10 pt-8" />
    </section>
  );
};

export default MapSection;
