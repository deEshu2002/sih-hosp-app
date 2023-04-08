import React from "react";
import BottomLine from "./SharingComponents/BottomLine";
import JoinNav from "./SharingComponents/JoinNav";
import FrontRest from "./FrontPage/FrontRest";
import logo from "./FrontPage/wave.svg";

export default function FrontPage() {
  return (
    <>
      <div
        className="overflow-auto scroll-pr-6 w-full bg-white flex flex-col justify-between h-screen bg-scroll bg-right-top bg-no-repeat"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="h-full w-full flex flex-col ">
          {" "}
          <div>
            <JoinNav />
          </div>
          <div className="h-fit mt-auto mb-auto">
            <FrontRest />
          </div>
        </div>
        <div className="my-2">
          <BottomLine />
        </div>
      </div>
    </>
  );
}
