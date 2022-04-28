import React,{useState} from "react";

export default function PersonDetail() {
  
  
  return (
    <div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type={"text"}
            name="floating_first_name"
            id="floating_first_name"
            className="form-input-effect peer"
            required=""
            
          />
          <label
            htmlFor="floating_first_name"
            className="form-label-effect"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="form-input-effect peer"
            required=""

          />
          <label
            htmlFor="floating_last_name"
            className="form-label-effect"
          >
            Last name
          </label>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="tel"
            pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
            name="floating_phone"
            id="floating_phone"
            className="form-input-effect peer"
            required
          />
          <label
            htmlFor="floating_phone"
            className="form-label-effect"
          >
            Contact number
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            name="floating_age"
            id="floating_age"
            className="form-input-effect peer"
            required
          />
          <label
            htmlFor="floating_age"
            className="form-label-effect"
          >
            Age
          </label>
        </div>
      </div>

      <div className="flex pb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex-auto pr-36">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="gender-state"
          >
            Gender
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gender-state"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
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

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex-auto pr-36">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="blood-state"
          >
            Blood group
          </label>
          <div className="relative">
            <select
              defaultValue={"N/A"}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="blood-state"
            >
              <option value={"N/A"}>N/A</option>
              <option value={"A+"}>A+</option>
              <option value={"A-"}>A-</option>
              <option value={"AB+"}>AB+</option>
              <option value={"AB-"}>AB-</option>
              <option value={"B+"}>B+</option>
              <option value={"B-"}>B-</option>
              <option value={"O+"}>O+</option>
              <option value={"O-"}>O-</option>
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
      </div>

      <div className="grid xl:grid-cols-2 xl:gap-6 mt-2">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="date"
            name="floating_admit_date"
            id="floating_admit_date"
            className="form-input-effect peer"
            required
          />
          <label
            htmlFor="floating_admit_date"
            className="form-label-effect"
          >
            Admit Date
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="time"
            name="floating_admit_time"
            id="floating_admit_time"
            className="form-input-effect peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_admit_time"
            className="form-label-effect"
          >
            Admit Time
          </label>
        </div>
      </div>

      <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_PatientID"
          className="form-input-effect peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_PatientID"
          className="form-label-effect"
        >
          Patient ID
        </label>
      </div>

      <label
        htmlFor="chief_complain"
        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"
      >
        Chief Complain
      </label>
      <textarea
        id="chief_complain"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></textarea>

      <div className="flex justify-start">
        <div className="mb-3 w-96 mt-3">
          <label
            htmlFor="formFile1"
            className="form-label text-sm font-medium inline-block mb-2 text-gray-700"
          >
            Co-existing Disease
          </label>
          <input
            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFileMultiple1"
          />
        </div>
      </div>

      <div className="flex justify-start">
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile2"
            className="form-label inline-block mb-2 text-gray-700 text-sm font-medium"
          >
            Drugs Currently Consuming
          </label>
          <input
            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile2"
          />
        </div>
      </div>

      <div className="flex justify-start">
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile3"
            className="form-label inline-block mb-2 text-gray-700 text-sm font-medium"
          >
            Drugs Allergies
          </label>
          <input
            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile3"
          />
        </div>
      </div>

      <div className="flex justify-start">
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile4"
            className="form-label inline-block mb-2 text-gray-700 text-sm font-medium"
          >
            Instructions from Doctor
          </label>
          <input
            className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile4"
          />
        </div>
      </div>
      <hr className="my-3" />

      <div className="flex justify-start">
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile5"
            className="form-label inline-block mb-2 text-gray-700 text-sm font-medium"
          >
            Test reports
          </label>
          <input
            className="form-control block w-min px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="formFile5"
          />
        </div>
        <div className="mt-3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 my-6 py-1 rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
