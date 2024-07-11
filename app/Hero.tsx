import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full h-[440px] ">
      <div className="block justify-start items-center h-full w-[80%]">
        <div className=" mt-20">
          <h1 className="font-extrabold text-[60px]">
            All your businesses, <br /> in one place.
          </h1>
          <h4 className="text-gray-600 text-[17px] mt-3">
            Run your businesses without limitations; support customers, increase
            sales, and <br /> do more. For growing businesses and smart
            creators.🌿
          </h4>
          <div className="flex gap-3  items-center mt-7">
            <button className="text-white text-[16px] font-semibold bg-blue-800 rounded-md px-3 py-2 flex justify-center items-center">
              Get Started NOW
            </button>
            <p className="underline cursor-pointer text-gray-600 font-medium text-[17px]">
              See pricing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
