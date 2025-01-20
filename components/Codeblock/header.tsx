import React from "react";

type Props = {
  hidden: (event: React.MouseEvent<HTMLDivElement>) => void;
  ishidden: boolean;
};

const Header = ({ hidden, ishidden }: Props) => {
  return (
    <div className="absolute top-0 w-full h-[5vh] bg-background">
      I am Header
      <div
        className="absolute right-[2%] top-2 p-[8px] flex items-center cursor-pointer hover:bg-gray-200/20 rounded-md"
        onClick={hidden}
      >
        {ishidden && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 15h18" />
              <path d="m15 8-3 3-3-3" />
            </svg>
          </div>
        )}
        {!ishidden && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 15h18" />
              <path d="m9 10 3-3 3 3" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
