import React from "react";
import Navbar from "../../components/Landing/Navbar";
import Hero from "../../components/Landing/Hero";
import Features from "../../components/Landing/Features";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-transparent to-blue-800/60">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default page;
