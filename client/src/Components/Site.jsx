import React from "react";
import "./DownloadBrochureButton.css"; // Make sure this CSS is imported

const Site = () => {
  return (
    <section id="site" className="pt-5 pr-4 pb-4 bg-gray-50 w-full lg:w-[78%]">
      <div className="bg-white p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Floor Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 1 BHK Card */}
        <div className="shadow-lg overflow-hidden">
          <img
            src="/src/assets/2bhk.jpeg"
            alt="1 BHK Floor Plan"
            className="w-full h-70"
          />
          <button className="relative w-full bg-gradient-to-r from-black to-green-700 text-white py-3 text-center text-xl font-semibold">
            1 BHK
            <span className="metallic-shine"></span>
          </button>
        </div>

        {/* 2 BHK Card */}
        <div className="shadow-lg overflow-hidden border border-gray-200">
          <img
            src="/src/assets/2bhk.jpeg"
            alt="2 BHK Floor Plan"
            className="w-full h-70"
          />
          <button className="relative w-full bg-gradient-to-r from-black to-green-700 text-white py-3 text-center text-xl font-semibold">
            2 BHK
            <span className="metallic-shine"></span>
          </button>
        </div>
        </div>
        </div>
    </section>
  );
};

export default Site;
