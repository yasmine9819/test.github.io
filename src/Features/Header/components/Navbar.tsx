import React from "react";
import FacebookIcon from "../../../Icons/FacebookIcon";
import VideoIcon from "../../../Icons/VideoIcon";
import TransitionIcon from "./TransitionIcon";

function Navbar() {
  return (
    <nav className="w-full p-1 overflow-auto bg-gray-200 ">
      <div className="flex float-right mr-32 divide-x divide-white">
        <TransitionIcon name="Facebook" bgColor="hover:bg-blue-800">
          <FacebookIcon className="w-6 h-6 fill-current " />
        </TransitionIcon>
        <TransitionIcon name="Dailymotion" bgColor="hover:bg-blue-600">
          <VideoIcon className="h-6 pr-1 fill-current w-7 " />
        </TransitionIcon>
      </div>
    </nav>
  );
}

export default Navbar;
