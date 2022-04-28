import React from "react";
import Recents from "./Recents";
import hospbed from './hospbed.svg';
import oxy from './oxy.svg';
import ambu from './ambu.svg';
import med from './med.svg';
import blandpl from './blandpl.svg';
import recent from './recent.png';



const Overview = () => {
  return (
    <>
      <div className="h-screen mx-[42px] flex flex-col">
        <div>
        <div className="text-2xl font-montserrat text-slate-800 font-bold mt-7">
          Overview
        </div>
        <div className="grid grid-cols-3 gap-7 mx-[86px] mt-14 ">
          <div className="">
            <div className=" bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="flex flex-col my-4 ">
                <div className="flex">
                <img src={hospbed} alt="" className="mx-5 w-10 h-10 static"/>
                  <p className="font-bold text-base font-mulish text-gray-900 mt-1">
                  Beds Occupied
                </p>
                </div>
                <div className="flex justify-center">
                  <div className="pt-3 text-5xl font-poppins font-bold text-center text-slate-900 ">
                    60
                  </div>
                </div>
                <div className="flex justify-end">
                  <p className="pr-6 mt-[-6px]">/84</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="flex flex-col mt-2 mb-4">
                <div className="flex w-full items-end"><img src={oxy} alt="" className="mx-5 w-10 h-10 satic"/><p className="font-bold text-base font-mulish text-gray-900 text-center w-full -ml-[70px]">
                  Oxygen <br/>Remaining
                </p></div>
                
                <div className="flex justify-center">
                  <div className="pt-3 text-5xl font-poppins font-bold text-center text-slate-900 ">
                    900<span className="text-base -mr-2">L</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <p className="pr-3 mt-[-6px]">/2000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="flex flex-col mb-4 mt-2">
              <div className="flex w-full items-end"><img src={ambu} alt="" className="mx-5 w-8 h-8 satic mb-1"/><p className="font-bold text-base font-mulish text-gray-900 text-center w-full -ml-[70px]">
                  Ambulance in <br/>Field
                </p></div>
                
                <div className="flex justify-center">
                  <div className="pt-3 text-5xl font-poppins font-bold text-center text-slate-900 ">
                    24
                  </div>
                </div>
                <div className="flex justify-end">
                  <p className="pr-6 mt-[-6px]">/33</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7 mt-7 mx-[218px]">
          <div className=" bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="flex flex-col mb-4 mt-2">
              <div className="flex w-full items-end"><img src={med} alt="" className="mx-5 w-10 h-10 static"/><p className="font-bold text-base  font-mulish text-gray-900 text-center w-full -ml-[70px]">
                Medicine<br/> Unavailable
              </p></div>

              <div className="flex justify-center">
                <div className="pt-3 text-5xl font-poppins font-bold text-center text-slate-900 ">
                  21
                </div>
              </div>
              <div className="flex justify-end">
                <p className="pr-6 mt-[-6px]">/323</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="flex flex-col mb-4 mt-2">
              <div className="flex w-full items-end"><img src={blandpl} alt="" className="mx-5 w-8 h-8 static mb-1"/><p className=" font-bold text-base font-mulish text-gray-900 text-center w-full -ml-[60px]">
                Blood and Plasma<br/> Requirements
              </p></div>

              <div className="flex justify-center">
                <div className="pt-3 text-5xl font-poppins font-bold text-center text-slate-900 ">
                  3
                </div>
              </div>
              <div className="flex justify-end">
                <p className="pr-6 mt-[-6px]">Patients</p>
              </div>
            </div>
          </div>
        </div>
        </div>
          <div className="text-2xl font-montserrat text-slate-800 font-bold my-7 mx-11 flex">
            <img src={recent} alt=""/>
          <div className="ml-4">Recents</div>
        </div>

        <div className="mt-0 mx-14 overflow-auto">
          <Recents />
        </div>

      </div>
    </>
  );
};

export default Overview;
