import Image from "next/image";
import Link from "next/link";
import React from "react";
import chigilogo from "../public/chigilogo.svg";
import chigicall from "../public/chigicall.svg";

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full h-[70px] ">
      <div className="flex justify-between items-center w-[80%] h-[70px] border-b-2">
        <div className="flex items-center justify-center gap-8">
          <div className="flex justify-center items-center w-[120px] h-[100px]">
            <Image src={chigilogo} alt="logo" width={1000} height={1000} />
          </div>
          <nav className="gap-5 flex justify-center items-center text-gray-350 font-extralight">
            <Link href="/Products">Products</Link>
            <Link href="/Customers">Customters</Link>
            <Link href="/Company">Company</Link>
            <Link href="/Pricing">Pricing</Link>
          </nav>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center justify-center object-fit">
            <Image src={chigicall} alt="logo" width={25} height={30} />
          </div>
          <div className="rounded-md bg-blue-800 text-white px-4 py-2 ">
            <button className="flex justify-center items-center text-[14px] foont-semibold capitalize">
              my Dumo'Cloud
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
