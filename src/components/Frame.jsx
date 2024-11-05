import React from "react";
import FrameHeader from "./FrameHeader";
import MainFrame from "./MainFrame";

const Frame = ({ children }) => {
  return (
    <div className="flex-grow p-2 mt-10 bg-white rounded-lg h-[1000px] border-2 border-blue-300">
      <FrameHeader/>
      <hr className="m-8 border-blue-100"/>
      <MainFrame/>
      {children}
    </div>
  );
};

export default Frame;
