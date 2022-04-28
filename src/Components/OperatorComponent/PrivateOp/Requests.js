import React, { useState } from "react";
import MedQuery from "./MedQuery";

const Requests = () => {
  const [toggle, settoggle] = useState(true);

  const toggleClass = "transform translate-x-6";
  const toggleBoxClass = "bg-gray-300";
  const defaultBoxClass = "bg-primary_text";
  return (
    <>
      <div className="h-min mx-auto float-right mt-7 w-full">
        <div className="mx-8">
        <div className="flex flex-row">
          <div className="text-2xl font-poppins text-slate-800 font-extrabold ">
            Requests
          </div>
          <div className="ml-[558px]">icon</div>
        </div>
        <div className="flex flex-col mx-2 my-6 bg-primary_bg rounded-lg px-4 p-4">
          <div className="flex flex-row ">
            <div className="text-slate-800 font-mulish font-bold text-2xl mr-5">
              Automate
            </div>
            <div
              className={
                "md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer " +
                (toggle ? toggleBoxClass : defaultBoxClass)
              }
              onClick={() => {
                settoggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={
                  "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? null : toggleClass)
                }
              ></div>
            </div>
          </div>
          <div className="text-xs font-extrabold font-mulish mt-2 text-primary_text ">
            Automating it will make all the requests by the user accepted by
            default if found inside the database
          </div>
        </div>
        <MedQuery />
        </div>
      </div>
    </>
  );
};
export default Requests;
