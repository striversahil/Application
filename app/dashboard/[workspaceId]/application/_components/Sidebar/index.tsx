import React from "react";
import CompSidebar from "./Component";
import { LaptopMinimal } from "lucide-react";
import Image from "next/image";

type Props = {};

const Reference = [
  {
    title: "Component",
    icon: <LaptopMinimal />,
  },
  {
    title: "Workflow",
    icon: <LaptopMinimal />,
  },
  {
    title: "Preview",
    icon: <LaptopMinimal />,
  },
];

// Add no. of Sidebar as per need
const Navigators = Array(3).fill(false);

const Sidebar = (props: Props) => {
  const [State, setState] = React.useState(Navigators);

  const handleClick = (index: number) => {
    const newState = [...Navigators];
    if (!State[index]) {
      newState[index] = !newState[index];
    }
    setState(newState);
  };

  return (
    <div className="flex duration-1000">
      <div className="w-[45px] h-full bg-inherit  flex-col bg-slate-900 space-y-10">
        <Image
          src={"/apotzalogo.jpg"}
          width={50}
          height={50}
          alt="brand_pic"
          className="mx-auto bg-blue-950 rounded-md"
        />
        {/* Todo : Add Navigations as per need */}
        {Reference.map((item, index) => (
          <div
            key={index}
            className="cursor-pointe w-fit flex justify-center cursor-pointer hover:bg-white/10 p-2 duration-200 rounded-md mx-1"
            onClick={() => handleClick(index)}
          >
            {item.icon}
          </div>
        ))}
      </div>
      {/* Add Custom Sidebar's for Different Usecases */}
      <CompSidebar open={State[0]} />
      <CompSidebar open={State[1]} />
      <CompSidebar open={State[2]} />
    </div>
  );
};

export default Sidebar;
