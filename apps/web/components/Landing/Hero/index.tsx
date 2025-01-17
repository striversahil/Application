import React from "react";
import Brand_Image from "./Brand_Image";
import Text from "./Text";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative flex justify-center h-screen  overflow-clip">
      <div className="absolute -z-10 hidden md:flex  h-[120%] w-[120%] -left-[6%] -top-[7%] items-center rounded-3xl rotate-45 overflow-clip">
        <video
          autoPlay
          loop
          muted
          className=" scale-[2.5]  max-w-screen-2xl object-fill overflow-clip rounded-3xl"
          src="https://videos.ctfassets.net/w8fc6tgspyjz/1pNj0ayPe52j8e7ZfiPP1i/899d571e1a3006a78fb87c6ea7ba89d3/CHAT_LP_2mbps_V09.mp4"
        ></video>
      </div>
      <div className="flex w-full md:w-2/3 h-full items-center justify-between space-x-10">
        <Text />
        <Brand_Image />
      </div>
    </div>
  );
};

export default Hero;
