import React, { useState } from 'react';
import BannerImage from '../assets/Banner 4.png';
import './DownloadBrochureButton.css';
import { HiDownload } from 'react-icons/hi';
import DownloadForm from './DownloadForm'; // Import the DownloadForm component

const OverviewSection = ({ showMore, setShowMore, openForm }) => (
  <section className="shadow-sm md:pt-4 md:pr-4 md:pb-4" id="hero">
    <div className="bg-white p-10 shadow-md">
      <h1 className="text-primary font-medium text-[24px] md:text-4xl capitalize mb-4">
        Welcome to Balaji Vishant
      </h1>
      <p className="text-md text-black md:text-md mb-4">
        Be enchanted by the high rise of a MAJESTIC FAÇADE as you drive into the PRISTINE AMBIENCES of Balaji Vishant. Lifting you further are modern ELEVATORS READY to transport you to your apartment at express speed.
      </p>
      <p className="text-md mb-4">
        {showMore && (
          <span className="block">
            Entering your SPACIOUSLY AIRY HOME is a feeling best experienced than described. Awaiting your senses is a TASTEFULLY DESIGNED KITCHEN, A ROOMY LIVING AREA, SLEEP-CENTRIC BEDROOMS AND IDEAS-FRIENDLY BATHROOMS. And this is just the beginning of your Vishant wish-list.
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
        className="relative overflow-hidden inline-flex items-center gap-2 px-13 py-3 text-md font-semibold text-white bg-gradient-to-r from-gray-900 to-green-600 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
        onClick={openForm} // Trigger the form to open on button click
      >
        <HiDownload className="w-6 h-6 bounce-icon z-10" />
        <span className="z-10">Download Brochure</span>
        <div className="metallic-shine absolute inset-0 pointer-events-none" />
      </button>
    </div>
  </section>
);

function Hero() {
  const [showMore, setShowMore] = useState(false);
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const handleFormToggle = () => {
    setShowForm(true); // Show the form when the button is clicked
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide the form when closed
  };

  return (
    <div className="w-full lg:w-[78%] overflow-hidden bg-gray-50 flex flex-col justify-start items-center">
      <img
        src={BannerImage}
        alt="Banner"
        className="w-full object-cover"
      />
      <OverviewSection showMore={showMore} setShowMore={setShowMore} openForm={handleFormToggle} />
      
      {/* Conditionally render the DownloadForm based on state */}
      {showForm && <DownloadForm handleClose={handleCloseForm} />}
    </div>
  );
}

export default Hero;
