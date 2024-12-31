import React from "react";
import Image from "next/image";

type Props = {};

const Brand_Image = (props: Props) => {
  return (
    <div className="absolute left-[180px] ">
      <div className="absolute -top-5 w-full h-10 md:backdrop-blur-lg z-10"></div>
      <Image
        src="/brand/hero-dashboard.avif"
        alt="Vercel Logo"
        width={1700}
        height={900}
        className=""
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent  rounded-3xl"></div>
      <div className="absolute -bottom-5 w-full h-10 md:backdrop-blur-md z-10"></div>
    </div>
  );
};

export default Brand_Image;
