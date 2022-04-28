import React from "react";
import AdmissionKind from "./form/AdmissionKind";
import ConsentAndPayment from "./form/ConsentAndPayment";
import MiniDB from "./form/MiniDB";
import PersonDetail from "./form/PersonalDetails";

function Form() {
  // const [searchTerm, setsearchTerm] = useState("");
  function handleData(e){
    e.preventDefault()
    console.warn("all data", )
  }
  return (
    <div>
      <div className="h-60 bg-cyan-200 ">
        <div className="float-left m-12 ml-14">
            <h3 className="text-slate-900 text-3xl font-semibold">cam<span className="text-3xl text-blue-700 font-semibold">link</span></h3>
        </div>
        <div className="max-w-6xl mx-auto pt-36">
          <h2 className="text-blue-900 text-4xl font-extrabold ml-2">Patient Form</h2>  
        </div> 

      </div>


    <div className="max-w-6xl mx-auto -mt-10 bg-white">
      <div className="pt-4 grid grid-cols-3 gap-4 xl:shadow-md">
        <div className="col-span-2 pb-6 pl-6">
          <form action="/" method="post"
          onSubmit={handleData}
          >
            
            <AdmissionKind />
            <PersonDetail />
            
            <label
              htmlFor="bedType"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Alotted bed
            </label>
            <select
            defaultValue={"Critical care beds"}
              id="bedType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={"Critical care beds"}>Critical care beds</option>
              <option value={"Curative (acute) care beds"}>Curative (acute) care beds</option>
              <option value={"Long-term care beds"}>Long-term care beds</option>
            </select>
            <hr className="my-3" />

            <ConsentAndPayment />

            <button
              type="submit"
              className="mt-3 font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

export default Form;
