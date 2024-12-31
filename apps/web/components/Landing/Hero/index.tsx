import React from "react";
import Brand_Image from "./Brand_Image";
import Text from "./Text";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex justify-center h-screen bg-gradient-to-r from-transparent to-blue-800/60">
      <div className="flex w-full md:w-2/3 h-full items-center justify-between space-x-10">
        <Text />
        <Brand_Image />
      </div>
    </div>
  );
};

export default Hero;
