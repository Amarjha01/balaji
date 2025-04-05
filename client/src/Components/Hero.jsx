import React, { useState } from 'react';
import BannerImage from '../assets/Banner.jpg'; // adjust the path if needed
import 'animate.css';

// This is your OverviewSection component
const OverviewSection = ({ showMore, setShowMore }) => {
  return (
    <section className="shadow-sm p-8" id="overview">
      <h1 className="text-primary font-bold text-3xl capitalize mb-4">
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
      className="relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-black to-green-500 rounded-md shadow-lg transform hover:scale-110 hover:shadow-2xl transition-all duration-500"
    >
      Download Brochure
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-20 animate-glossyEffect" />
    </button>


      <div className="free-ride-mobile-section mt-8 text-center">
        <img
          className="w-4/5 mx-auto my-4"
          src="assets/img/free-site-visit.png"
          alt="Free Site Visit"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
          data-form="lg"
          data-title="Book A Free Site Visit"
          data-btn="Book Now"
          data-enquiry="Book A Free Site Visit Left Panel"
          data-redirect="enquiry"
          data-toggle="modal"
          data-target="#enqModal"
        >
          Book A Free Site Visit
        </button>
      </div>
    </section>
  );
};

// This is your Hero component where you use the state
function Hero() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="hero" className="w-full lg:w-[78%] h-308 m-0 p-0 overflow-hidden bg-gray-200 flex flex-col justify-start items-center">
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
