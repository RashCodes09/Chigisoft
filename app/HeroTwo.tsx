import Image from "next/image";
import React from "react";

const HeroTwo = () => {
  const img = [
    { id: 1, image: "/img1.svg", style: { width: "150px", height: "200px" } },
    { id: 2, image: "/img2.svg" },
    { id: 3, image: "/img3.svg" },
    { id: 4, image: "/img4.svg" },
    { id: 5, image: "/img5.svg" },
    { id: 6, image: "/img6.svg" },
  ];
  return (
    <div className="flex w-full justify-center items-center h-[450px]">
      <div className=" w-[80%] h-full justify-center items-center">
        <p className="font-light text-gray-500">Trusted by:</p>
        <div className=" mt-[-70px]">
          <div className="flex gap-5 items-center">
            {img?.map((props: any) => (
              <div key={props.id}>
                <Image
                  src={props.image}
                  alt="img"
                  width={100}
                  height={100}
                  style={props.style}
                />
              </div>
            ))}
          </div>
        </div>

        <div className=" w-full justify-start">
          <h1 className="text-gray-500 font-medium text-[33px]">
            Connect the tools that matters to your business
          </h1>
          <h1 className="font-semibold text-[35px] ">
            — Payments, Sales, Operations, Marketing, Customer <br /> Engagement
            e.t.c with solid data protection.
          </h1>
        </div>
        <div className="flex cursor-pointer mt-10 justify-between px-20 items-center rounded-[40px] border-none bg-gray-600 w-[650px] h-[110px]">
          <div className="font-semibold text-[17px]">
            <p>Craetor</p>
            <p>Cloud</p>
          </div>
          <div className="font-semibold text-[17px]">
            <p>Craetor</p>
            <p>Cloud</p>
          </div>
          <div className="font-semibold text-[17px]">
            <p>Craetor</p>
            <p>Cloud</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
