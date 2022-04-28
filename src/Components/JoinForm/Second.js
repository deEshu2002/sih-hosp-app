import React, { useState } from "react";
import { giveAnimation, goBackward, goForward } from "../Action";
import { useDispatch } from "react-redux";

function Second(props) {
  const dispatch = useDispatch();
  const [effect, seteffect] = useState();
  const [tags, settags] = useState([]);

  const addTag = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      settags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const removeTag = (index) => {
    settags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  const data = [
    { id: 0, label: "Ambulace" },
    { id: 1, label: "Blood Bank" },
    { id: 2, label: "Plasma Bank" },
    { id: 3, label: "Medicine" },
    { id: 4, label: "Oxygen Supply" },
    { id: 5, label: "Tests" },
  ];

  return (
    <div className={`${effect}`}>
      <div className={`flex justify-center h-full ${props.transform}`}>
        <div className="p-6 border-[1px] rounded-lg flex flex-col items-center space-y-3 shadow-md bg-white h-max ">
          <div className="pb-3 font-mulish font-extrabold text-[22px] text-primary_text">
            Entity Details
          </div>
          <input
            className="p-2 border-[1px] border-black/25 rounded-md w-96 focus:outline-none focus:border-primary_text "
            placeholder="Name"
          />
          <div className="flex flex-col space-y-1">
            <input
              className="p-2 border-[1px] border-black/25 rounded-md w-96 focus:outline-none focus:border-primary_text "
              placeholder="Address"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <input
              className="p-2 border-[1px] border-black/25 rounded-md w-96 focus:outline-none focus:border-primary_text"
              placeholder="Pincode"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <input
              className="p-2 border-[1px] border-black/25 rounded-md w-96 focus:outline-none focus:border-primary_text"
              placeholder="Contact"
            />
          </div>

          <label
            for="Specialist"
            className="block mb-1 text-gray-800 place-self-start ml-2"
          >
            Specialist:
          </label>
          <div id="Specialist">
            <ul className="flex flex-wrap max-w-sm">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="rounded-full mx-2 bg-[#F7AA00] px-2 py-1 text-white my-1"
                >
                  <span>{tag}</span>
                  <i
                    className="cursor-pointer"
                    onClick={() => removeTag(index)}
                  >
                    -i
                  </i>
                </li>
              ))}
            </ul>
            <input
              className="outline-none p-2 mt-2 border-[1px] border-black/25 rounded-md w-96 focus:outline-none focus:border-primary_text"
              type={"text"}
              onKeyUp={(event) => addTag(event)}
              placeholder="Type Specialists and Press Enter to Add"
            />
          </div>

          <div id="fascilities" className="space-y-1 w-96 ml-2">
            <label
              for="fascilities"
              className="text-gray-800 block  cursor-pointer"
            >
              Fascilities available:
            </label>
            <div className="grid grid-cols-2 mx-2">
              {data.map((item) => (
                <div className="w-full my-2">
                  <label for={item.id} className="text-gray-800 cursor-pointer">
                    {item.label}
                  </label>
                  <input
                    type={"checkbox"}
                    id={item.id}
                    className="float-right mr-8 cursor-pointer  w-5 h-5"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <input
              className="p-2 border-[1px] border-black/25 rounded-md w-96 focus:outline-none focus:border-primary_text"
              placeholder="Number of Beds"
            />
          </div>

          <div className="flex justify-between pt-2 w-full">
            <button
              className="w-fit bg-primary_text py-1 px-6 text-white font-extrabold text-xl font-mulish ml-6 rounded-md shadow-md"
              onClick={() => {
                dispatch(goBackward());
                seteffect("animate-fadeOut");
                dispatch(giveAnimation());
              }}
            >
              Prev
            </button>
            <button
              className="w-fit bg-primary_text py-1 px-6 text-white font-extrabold text-xl font-mulish mr-6 rounded-md shadow-md"
              onClick={() => {
                dispatch(goForward());
                seteffect("animate-fadeOut");
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
