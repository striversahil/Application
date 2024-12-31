import React from "react";
import Image from "next/image";

type Props = {};

const Brand_Image = (props: Props) => {
  return (
    <div className="absolute left-[180px]">
      <Image
        src="/brand/hero-dashboard.avif"
        alt="Vercel Logo"
        width={1700}
        height={900}
        className=""
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent  rounded-3xl"></div>
    </div>
  );
};

export default Brand_Image;
