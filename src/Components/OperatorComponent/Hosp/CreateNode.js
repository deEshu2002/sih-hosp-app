import React from "react";

const CreateNode = () => {
  return (
    <>
      <div className="py-7 px-8 h-screen">
        <div className="text-2xl font-montserrat text-slate-800 font-bold ">
          Create Node
        </div>
        <div className=" mx-20 mt-16 pr-48">
          <form action="/" method="post">
            <div className="grid">
              <div className="relative  mb-6 w-full group">
                <input
                  type={"text"}
                  name="Name"
                  id="Name"
                  className="form-input-effect peer"
                  required=""
                />
                <label htmlFor="Name" className="form-label-effect">
                  Name
                </label>
              </div>
              <div className="relative  mb-6 w-full group">
                <input
                  type="text"
                  name="uniqueID"
                  id="uniqueID"
                  className="form-input-effect peer"
                  required=""
                />
                <label htmlFor="uniqueID" className="form-label-effect">
                  Unique ID
                </label>
              </div>
              <div className="relative  mb-6 w-full group">
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  className="form-input-effect peer"
                  required=""
                />
                <label htmlFor="contact" className="form-label-effect">
                  Contact
                </label>
              </div>
              <div className="relative  mb-6 w-full group">
                <input
                  type="text"
                  name="Password"
                  id="Password"
                  className="form-input-effect peer"
                  required=""
                />
                <label htmlFor="Password" className="form-label-effect">
                  Password
                </label>
              </div>
              <div className="relative  mb-6 w-full group">
                <input
                  type="text"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="form-input-effect peer"
                  required=""
                />
                <label htmlFor="confirmPassword" className="form-label-effect">
                  Confirm Password
                </label>
              </div>
              <div className="flex justify-between mx-4">
                <button className="bg-primary_text hover: text-white font-bold py-2 place-content-center rounded w-[100px]">
                  Submit
                </button>
                <button className="bg-primary_text hover: text-white font-bold py-2  place-content-center rounded w-[100px]">
                  Edit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNode;
