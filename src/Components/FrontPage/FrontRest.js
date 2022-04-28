import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function FrontRest() {
   const data = [ {id:0, label:"Hospital"},
                  {id:1, label:"Medical Store"},
                  {id:2, label:"Ambulance"}, 
                  {id:3, label:"Oxygen Provider"},
                  {id:4, label:"Blood/Plasma Bank"}, 
                  {id:5, label:"Test Labs"}] 

       const [isOpen, setIsOpen] = useState(false);
       const [selectedItem, setselectedItem] = useState("As")
       
       const toggleDropdown =() =>setIsOpen(!isOpen);
       
       const handleItemClick =(id) =>{
        const provider = data[id].label;
        setselectedItem(provider);
       }
    

    let navigate= useNavigate();
    const routeChange=()=>{
        let path=`joinForm`;
        navigate(path);
    }

  return (
  <>
    <div className="container flex  mx-auto h-fit pb-36 mt-10">
      <div className=" flex flex-col w-fit my-auto justify-center ml-14">
        <div className="text-[40px] font-poppins font-medium  text-primary_text ">
          Database for Health Sector <br/>on the Cloud
        </div>
        <div className="text-black/75 mt-6 text-sm font-poppins font-medium">
          Uniting the Health Sector for providing necessary items to patients in need.
        </div>
        <div className="flex mt-14">
          <button className=" bg-primary_text rounded-md py-1 px-8 text-primary_bg font-bold text-lg font-mulish "
          onClick={routeChange}>
            JOIN
          </button>
          <div className="relative inline-block text-left ml-8 cursor-pointer">
              <div className="flex justify-between w-64 rounded-md border border-primary_text shadow-sm px-3 py-1"
                onClick={toggleDropdown}
                >
                <span className="font-mulish font-medium text-lg pt-[2px]" >{selectedItem}</span>
                <svg
                    className={`h-8 w-fit text-primary_text ${isOpen?"rotate-180":null}` }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

            {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
            <div
              className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${!isOpen&&"hidden"}`}
              role="menu"
            >
              {data.map(item => (
          <div className="text-gray-700 block px-4 pb-1 font-mulish font-medium text-lg cursor-pointer hover:text-primary_text" onClick={(e) => {handleItemClick(e.target.id);setIsOpen(!isOpen)}} id={item.id}>
            {item.label}
          </div>
        ))}

            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full w-fit mx-auto my-auto justify-center pb-8 mr-40">
          <div className=" font-mulish font-extrabold text-xl text-primary_text">NODE SIGN IN</div>
          <input
            className="p-2 border-[2px] shadow-sm rounded-sm w-64 my-2 h-9 text-sm focus:outline-none  focus:border-primary_text"
            placeholder="Email Address"
          />
          <div className="flex flex-col space-y-1">
            <input
              className="p-2 border-[2px] shadow-sm rounded-sm w-64  my-2 h-9 text-sm focus:outline-none focus:border-primary_text"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center mt-1 w-full">
            <button className="w-64 bg-[#F7AA00] rounded-sm py-2 text-white font-bold text-sm font-mulish">
              Sign In
            </button>
        </div>
      </div>
      </div>
    </>
  );
}
