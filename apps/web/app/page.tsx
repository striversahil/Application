import React from "react";
import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default page;
