import React from "react";
import Brand_Image from "./Brand_Image";
import Text from "./Text";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative flex justify-center h-screen bg-gradient-to-r from-transparent to-blue-800/60 overflow-clip">
      <div className="flex w-full md:w-2/3 h-full items-center justify-between space-x-10">
        <video
          autoPlay
          loop
          muted
          className="absolute hidden md:block opacity-70 left-0 top-0 -translate-x-[20%] -translate-y-[25%] scale-[1.5] rotate-45  max-w-screen-2xl object-fill overflow-clip rounded-3xl"
          src="https://videos.ctfassets.net/w8fc6tgspyjz/1pNj0ayPe52j8e7ZfiPP1i/899d571e1a3006a78fb87c6ea7ba89d3/CHAT_LP_2mbps_V09.mp4"
        ></video>
        <Text />
        <Brand_Image />
      </div>
    </div>
  );
};

export default Hero;
