import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {goBackward} from'../Action';
import { useNavigate } from "react-router-dom";



function Third(props){
  let navigate =useNavigate();
  const changeRoute=()=>{
    let path=`/dashboard`;
    navigate(path);
  }

  const dispatch = useDispatch();
  const [effect, seteffect] = useState();

  const [hosptype, hosptypeInputProps] = useRadioButtons("hosptype");
function useRadioButtons(name){
  const [value, setvalue]=useState(null);

  const handleChange =e =>{
    setvalue(e.target.value);
  };
  const inputProps={
    name,
    type:"radio",
    onChange:handleChange
  };
  return [value, inputProps];
}

 

  return (
    <div className={`${effect}`}>
        <div className={`flex justify-center h-full ${props.transform}`}>
            <div className="p-6 border-[1px] rounded-lg flex flex-col items-center space-y-3 shadow-md bg-white h-max ">
              <div className="pb-3 font-mulish font-extrabold text-[22px] text-primary_text">
                Validate Id
              </div>
              <input
                className="p-2 border-[1px] border-black/25 rounded-md w-96  focus:outline-none focus:border-primary_text"
                placeholder="Registration No."
              />
              <div className="flex flex-col space-y-1 place-self-start py-2">
            <label
              class="form-check-label text-gray-800 block ml-2"
              for="ambulance"
            >
              Hospital Type:
            </label>
            <div class="flex flex-wrap max-w-sm gap-6" id="hosptype">
              <div class="">
                <input
                  class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary_text checked:border-blue-600 focus:outline-none transition duration-200 mt-1 float-left mr-2 cursor-pointer"
                  id="inlineRadio30"
                  value="Private"
                  checked={hosptype==="Private"}
                  {...hosptypeInputProps}
                />
                <label
                  class="form-check-label inline-block text-gray-800 cursor-pointer"
                  for="inlineRadio30"
                >
                  Private
                </label>
              </div>
              <div class="">
                <input
                  class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary_text checked:border-blue-600 focus:outline-none transition duration-200 mt-1 float-left mr-2 cursor-pointer"
                  id="inlineRadio31"
                  value="Government"
                  checked={hosptype==="Government"}
                  {...hosptypeInputProps}
                />
                <label
                  class="form-check-label inline-block text-gray-800 cursor-pointer"
                  for="inlineRadio31"

                >
                  Goverment
                </label>
              </div>
              <div class="">
                <input
                  class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary_text checked:border-blue-600 focus:outline-none transition duration-200 mt-1 float-left mr-2 cursor-pointer"
                  type="radio"
                  id="inlineRadio32"
                  value="Semigov"
                  checked={hosptype==="Semigov"}
                  {...hosptypeInputProps}
                />
                <label
                  class="form-check-label inline-block text-gray-800 cursor-pointer"
                  for="inlineRadio32"

                >
                  Semigov
                </label>
              </div>
            </div>
          </div>

              <div className="flex flex-col space-y-1">
              <div class="flex justify-center">
  <div class="mb-3 w-96">
    <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Registration Certificate</label>
    <input class="
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    focus:text-gray-700 focus:bg-white focus:border-primary_text focus:outline-none" type="file" id="formFile"/>
  </div>
</div>
              </div>


              <div className="flex justify-between pt-2 w-full">
              <button className="w-fit bg-primary_text py-1 px-6 text-white font-extrabold text-xl font-mulish ml-6 rounded-md shadow-md"
                onClick={()=> {dispatch(goBackward()); seteffect("animate-fadeOut")}}
                >
                Prev 
                </button>
                <button className="w-fit bg-primary_text py-1 px-6 text-white font-extrabold text-xl font-mulish mr-6 rounded-md shadow-md"
                onClick={changeRoute}
                >
                Join 
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Third;
