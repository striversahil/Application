"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex flex-col h-screen bg-gray-800 text-white  ${
        isCollapsed ? "w-20" : "w-64"
      } transition-all duration-300`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-gray-700">
        <h1 className={`text-xl font-bold ${isCollapsed ? "text-center" : ""}`}>
          {isCollapsed ? "L" : "Available Components"}
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center hover:bg-gray-700 p-2 rounded"
            >
              <span className="mr-2">🏠</span>
              {!isCollapsed && <span>Home</span>}
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center hover:bg-gray-700 p-2 rounded"
            >
              <span className="mr-2">📂</span>
              {!isCollapsed && <span>Projects</span>}
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center hover:bg-gray-700 p-2 rounded"
            >
              <span className="mr-2">📧</span>
              {!isCollapsed && <span>Messages</span>}
            </a>
          </li>
        </ul>
      </nav>

      {/* Toggle Button */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={toggleSidebar}
          className="w-full flex items-center justify-center hover:bg-gray-700 p-2 rounded"
        >
          {isCollapsed ? "➡️" : "⬅️"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
