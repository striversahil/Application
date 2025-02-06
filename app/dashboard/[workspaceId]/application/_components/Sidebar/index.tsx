import React from "react";
import CompSidebar from "./Component";

type Props = {};

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
    console.log(newState);
  };

  return (
    <div className="flex">
      <div className="w-[100px] h-full bg-white  flex-col space-y-10">
        {Navigators.map((item, index) => (
          <div
            key={index}
            className="text-black text-center cursor-pointer bg-red-300 w-full h-12 flex items-center justify-center"
            onClick={() => handleClick(index)}
          >
            Click Here
          </div>
        ))}
      </div>
      <CompSidebar open={State[0]} />
      <CompSidebar open={State[1]} />
      <CompSidebar open={State[2]} />
    </div>
  );
};

export default Sidebar;
