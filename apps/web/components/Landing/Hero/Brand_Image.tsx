import React from "react";
import Image from "next/image";

type Props = {};

const Brand_Image = (props: Props) => {
  return (
    <div className="absolute">
      <Image
        src="/brand/hero-dashboard.avif"
        alt="Vercel Logo"
        width={5000}
        height={1504}
        className=""
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
    </div>
  );
};

export default Brand_Image;
