import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {goForward} from '../Action';

 

function First(props){

  const dispatch = useDispatch();
  const [effect, seteffect] = useState("");
  return (
    <div className={`${effect}`}>
        <div className={`flex justify-center h-full ${props.transform}`}>
            <div className="p-6 border-[1px] rounded-lg flex flex-col items-center space-y-3 shadow-md bg-white h-max ">
              <div className="pb-3 font-mulish font-extrabold text-[22px] text-primary_text">
                Create your Account
              </div>
              <input
                className="p-2 border-[1px] border-black/25 rounded-md w-96  focus:outline-none focus:border-primary_text"
                placeholder="Email Id"
              />
              <div className="flex flex-col space-y-1">
                <input
                  className="p-2 border-[1px] border-black/25 rounded-md w-96  focus:outline-none focus:border-primary_text"
                  placeholder="Password"
                  />
              </div>
              <div className="flex flex-col space-y-1">
                <input
                  className="p-2 border-[1px] border-black/25 rounded-md w-96 focus:outline-none focus:border-primary_text"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex justify-center pt-2 w-full">
                <button className="w-fit bg-primary_text py-1 px-6 text-white font-extrabold text-xl font-mulish rounded-md shadow-md"
                onClick={()=> {dispatch(goForward()); seteffect("animate-fadeOut")}}
                >
                Next 
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default First;
