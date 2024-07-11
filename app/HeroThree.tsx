import React from "react";

const HeroThree = () => {
  return (
    <div className="flex w-full h-[350px] justify-center items-center mt-24 ">
      <div className=" w-[80%] h-full  items-center ">
        <div className="flex justify-center items-center w-[170px] h-[45px]  bg-blue-700 rounded-[8px] text-white">
          <button className="font-semibold">Get started NOW</button>
        </div>
        <div className="mt-16 text-[35px] font-bold">
          <div className="flex items-center">
            <h1 className="text-blue-700">Do more with DUMO®</h1>
            <h1 className="text-gray-600">. No more restrictions</h1>
            <p>— Gain</p>
          </div>
          <h1 className="flex">
            access ALL apps with ALL the premium features <br /> you need to
            grow.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
