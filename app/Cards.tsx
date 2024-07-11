"use client";
import { url } from "inspector";
import Image from "next/image";
import React, { FC } from "react";
interface iComp {
  title?: string;
  logo: string;
  description?: string;
  imagess: string[];
  links?: string;
  backgroundimage: string;
  sI?: boolean;
  bgImage: string;
  lm?: boolean;
}
const Component: FC<iComp> = ({
  logo,
  title,
  description,
  imagess,
  links,
  backgroundimage,
  sI,
  bgImage,
  lm,
}) => {
  const myStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={myStyle}
      className={
        "grid grid-cols-2 sty  mt-16 gap-5 rounded-[22px] h-[450px] bg-[]"
      }
    >
      <div className=" h-[380px] w-[500px] ml-14 mt-12">
        <Image src={logo} alt="img" width={40} height={40} />
        <h1 className="text-[40px] font-bold mt-3"> {title} </h1>
        <h1 className="text-[18px] mt-5"> {description} </h1>
        <div className="flex items-center gap-5 mt-5">
          {sI ? (
            ""
          ) : (
            <>
              {imagess.map((el: any) => (
                <Image src={el} alt="#" width={50} height={50} />
              ))}
            </>
          )}
        </div>
        {lm ? (
          <div>
            <h1 className="text-[18px] mt-12 underline text-white font-bold">
              LearnMore
            </h1>
          </div>
        ) : (
          <div className="rounded-3xl w-[85px] h-[35px] flex items-center justify-center bg-blue-400  text-[13px] text-white">
            Comingsoon
          </div>
        )}
      </div>
      <div className="object-fit flex justify-center items-center">
        <Image src={backgroundimage} alt="img" width={400} height={300} />
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="flex w-full h-[1500px] justify-center items-center">
      <div className=" w-[80%] h-full  ">
        <Component
          bgImage="/bg-apps-list.b52863ce.svg"
          title="DUMO® Creator Cloud (DCC)."
          logo="/smlogo.svg"
          backgroundimage="/card1.svg"
          lm
          description="Run your creator & digital commerce business."
          imagess={["/imgone.svg", "/imgtwo.svg", "/imgthree.svg"]}
        />
        <Component
          bgImage="/bg-cloud.fcb6618b.svg"
          sI
          title="DUMO® Business Cloud (DBC)."
          logo="/ic-business-cloud.06b7bd0b.svg"
          backgroundimage="/cardtwo.png"
          description="Manage important aspects of your Growing Enterprise on one scalable operating system."
          imagess={[]}
        />
        <Component
          bgImage="/developers.svg"
          title="DUMO® Developer Cloud (DDC)."
          logo="/ic-oro.225602c3.svg"
          backgroundimage="/card3.svg"
          lm
          imagess={["/imgfour.svg", "/imgfive.svg", "/imgsix.svg"]}
        />
      </div>
    </div>
  );
};

export default Cards;
