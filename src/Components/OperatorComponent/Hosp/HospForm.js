import React from "react";
import AdmissionKind from "./form/AdmissionKind";
import ConsentAndPayment from "./form/ConsentAndPayment";
import MiniDB from "./form/MiniDB";
import PersonDetail from "./form/PersonalDetails";
import cad from "./cad.png";
import logout from "./logout.svg";

function HospForm() {
  // const [searchTerm, setsearchTerm] = useState("");
  function handleData(e){
    e.preventDefault()
    console.warn("all data", )
  }
  return ( 
    <div>
      <div className="h-60 bg-secondary_bg w-screen">
        <div className="float-left p-10 pl-14 flex flew-col justify-between w-screen">
            <h3 className="text-slate-900 font-raleway text-2xl font-semibold flex">cam<span className="text-primary_text">link</span>
              <img src={cad} alt="" className="-mt-2 ml-1 w-12 h-12" />
            </h3>
          <div className="font-mulish font-bold text-xl text-gray-700 gap-3  grid grid-flow-col place-content-center pr-10">
            <div>Gate A</div>
            <button >
              <img src={logout} alt="logout" className="w-6 h-6"/>
            </button>
          </div>
        </div>
        <div className="max-w-[1220px] mx-auto pt-36">
          <h2 className="text-primary_text font-poppins text-[32px] font-bold ml-6">Patient Form</h2>  
        </div> 
      </div>


    <div className="max-w-[1220px] mx-auto -mt-10 bg-white mb-32 ">
      <div className="pt-4 flex flex-row gap-4 xl:shadow-md max-h-full">
        <div className="basis-5/6 pb-6 pl-6">
          <form action="/" method="post"
          onSubmit={handleData}
          >
            
            <AdmissionKind />
            <PersonDetail />
            
            <div className=" mb-6 flex-auto  w-96">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="bedType"
          >
            Alotted Bed
          </label>
          <div className="relative">
            <select
              defaultValue={"Critical Care Beds"}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-primary_text"
              id="bedType"
            >
              <option value={"Critical Care Beds"} >Critical Care Beds</option>
              <option value={"Curative (acute) care beds"} >Curative (acute) care beds</option>
              <option value={"Long-term Care Bed"} >Long-term Care Bed</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>


            <hr className="my-3" />
            <ConsentAndPayment />

            <button
              type="submit"
              className="mt-3 font-bold text-white bg-primary_text focus:ring-4 focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
        </div>
        
        <MiniDB />
      
      </div>
    </div>

    
    </div>
  );
}

export default HospForm;
