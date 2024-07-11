import React from "react";

const myStyle = {
  backgroundImage: "url(/bg-dumo-extra-min.554520c8.jpeg)",
  backgroundRepeat: "no-repeat",
};
const CardMan = () => {
  return (
    <div className="w-full h-[650px]  flex justify-center items-center">
      <div
        className="flex justify-center items-center rounded-[22px] h-[550px]  w-[80%] object-cover absolute  "
        style={myStyle}
      >
        <div className="relative flex items-center justify-between  w-[800px] h-[550px]">
          <div className="font-extrabold text-[40px] text-white">
            Feautured apps
          </div>
          <div>
            <div className="w-[330px] h-[200px] bg-white rounded-[15px] mb-5 justify-center items-center flex">
              <div className="w-[250px] ">
                <h1 className="font-bold ">Ava</h1>
                <p className="mt-3 text-[14px] text-gray-500">
                  Deliver your online courses to anyone, anywhere!
                </p>
                <h1 className="underline text-[17px] font-semibold mt-3">
                  Learn more
                </h1>
              </div>
            </div>
            <div className="w-[330px] h-[200px] bg-white rounded-[15px]  justify-center items-center flex">
              <div className="w-[250px] ">
                <h1 className="font-bold ">Pali</h1>
                <p className="mt-3 text-[14px] text-gray-500">
                  Sell anything downloadable to anyone, anywhere.
                </p>
                <h1 className="underline text-[17px] font-semibold mt-3">
                  Learn more
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMan;

{
  /*       
/bg-dumo-extra-min.554520c8.jpg */
}
