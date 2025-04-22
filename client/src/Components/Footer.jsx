import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-sm text-gray-50 pt-3 md:pr-2 w-full lg:w-[78%]">
      <div className="text-black pt-2">
        <div className=" mx-auto space-y-6">
          {/* SS Life Spaces Section */}
          <div className="bg-white pl-11 pr-11 pb-11 pt-6 shadow-sm md:mr-2">
            <div className="flex text-center justify-center h-20">
              <img src="/src/assets/logo1.jpg" alt="" />
            </div>
            <h2 className="text-2xl font-semibold text-black mb-2">
              SS Life Spaces
            </h2>
            <p className="text-lg">
              SS Life Spaces is celebrating its 25th anniversary, a milestone
              marked by the happiness of over 2000 families who have made our
              lifespace their home. Our journey has been defined by a commitment
              to delivering affordable luxury through innovative residential
              complexes across Dombivli, Kalyan, and Thakurli. These projects
              have not just provided homes but have redefined lifestyles,
              offering top-tier wellness facilities and creating vibrant
              communities that resonate with modern living ideals.
            </p>

            <h3 className="font-semibold text-black mt-8 text-xl">
              RERA Information
            </h3>
            <div className="flex flex-col gap-2">
              <img
                src="/src/assets/kanhaqrcode.jpg" // Replace with actual QR image path
                alt="QR Code"
                className="w-20 h-24 mt-4 object-contain"
              />
              <p className="flex">
                <h1 className="text-xl">Balaji Residency 2 MahaRERA - </h1>
                <strong className="text-black font-bold ml-2 text-xl">
                  P51700047811
                </strong>
              </p>
            </div>
          </div>

          {/* About Bellamaison */}
          <div className="bg-white p-11 shadow-sm space-y-2 md:mr-2">
            <div className=" md:flex justify-between">
              <h3 className="text-3xl font-semibold pb-4 text-black ">
                About Bellamaison Realty
              </h3>
              <div className=" w-46 h-9 ml-10 bg-black rounded-md">
                <img
                  src="/src/assets/logo3.webp"
                  alt="logo"
                  className=" h-full w-full"
                />
              </div>
            </div>

            <p className="text-lg pb-6">
              Bellamaison Realty is a Marketing Consultant and channel partner
              based out of Mumbai.
            </p>
            <p className="text-lg">
              The group is working towards its goal to provide marketing and
              sales services to real estate developers. It is also working
              toward its goal to serve customers by providing them the best
              available support.
            </p>
            <p className="pt-3">
              <span className="text-[15px] ">Bellamaison Realty Rera - </span>
              <span className="text-[15px]">A031332400291</span>
            </p>
          </div>

          {/* Disclaimer (unchanged) */}
          <div className="bg-gray-50 shadow-md p-4 md:pl-13 md:pb-13 md:mb-5">
            <div className="text-xs text-gray-500 mt-2 pb-6">
              <p className="md:pt-8 md:pr-6 text-xs text-black/80">
                <strong className="text-xs text-black">Disclaimer: </strong>{" "}
                Presenting Balaji Residency 2 a beautiful project, a
                well-planned living space which is the hallmark of thoughtfully
                laid out flats at reasonable prices. Balaji Residency 2 brings a
                lifestyle that befits royalty with its beautiful apartments at
                Thakurli Your home will now serve as a perfect get-away after a
                tiring day at work, as Balaji Residency 2 will make you forget
                that you are living in the heart of the city. These residential
                apartments in Thakurli offer luxurious homes that amazingly
                escape the noise of the city center.
              </p>
              <br />
              <p className="md:pt-0 md:pr-6 text-xs text-black/80">
                The beautiful views and cross ventilation make your home a
                peaceful abode. In addition to that, there are a number of
                benefits of living in apartments with a good locality. Balaji
                Residency 2 is conveniently located at Thakurli to provide
                unmatched connectivity from all the important landmarks and
                places of everyday utility such as various well-known hospitals,
                educational institutions, super-marts, parks, entertainment
                spots, recreational centres and so on.
              </p>
            </div>

            {/* Line separator between disclaimer and footer */}
            <hr className="border-t border-gray-300 my-4" />

            {/* Footer Bottom Links */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-md text-gray-500 mt-2">
              <span className="text-black">Copyright © 2024 </span>
              <a href="#" className="hover:underline">
                {" "}
                | Terms & Conditions{" "}
              </a>
              <a href="#" className="hover:underline">
                {" "}
                | Privacy Policy |{" "}
              </a>
              <a href="#" className="hover:underline">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
