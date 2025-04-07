import React, { useState } from 'react';
import BannerImage from '../assets/Banner.jpg'; // adjust the path if needed
import './DownloadBrochureButton.css';
import { HiDownload } from "react-icons/hi";


// This is your OverviewSection component
const OverviewSection = ({ showMore, setShowMore }) => {
  return (
    <section className="shadow-sm pt-4 pr-4 pb-4 " id="overview">
      <div className='bg-white p-10 shadow-md'>
      <h1 className="text-primary font-medium text-5xl capitalize mb-4">
        Welcome to Balaji Kanha
      </h1>
      <p className="text-lg mb-4">
        Come and Experience, where every pleasure of life is just a short
        distance away. Everything you need is close to you. Balaji Govind's
        towering presence just 3 minutes from the railway station will signify
        for its residents, the perfect synergy of comfort with connectivity.
      </p>
      <p className="text-lg mb-4">
        {showMore && (
          <span className="block">
            Its uniqueness lies in the belts interesting convenience triangle
            that brings corporates, working professionals and retail within
            striking distance of each other creating in the process, a
            self-sustaining environment of growth.
          </span>
        )}
        <button
          className="text-blue-500 underline mt-2"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Read less' : 'Read more'}
        </button>
      </p>

     <button
  className="relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-gray-900 to-green-600 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
>
  <HiDownload className="w-6 h-6 bounce-icon z-10" />
  <span className="z-10">Download Brochure</span>
  <div className="metallic-shine absolute inset-0 pointer-events-none" />
        </button>
    </div></section>
    
  );
};

// This is your Hero component where you use the state
function Hero() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="hero" className="w-full lg:w-[78%] m-0 p-0 overflow-hidden bg-gray-50 flex flex-col justify-start items-center">
      <img
        src={BannerImage}
        alt="Banner"
        className="w-full object-contain mt-15"
      />
      {/* Pass showMore and setShowMore as props to OverviewSection */}
      <OverviewSection showMore={showMore} setShowMore={setShowMore} />
    </div>
  );
}

export default Hero;
