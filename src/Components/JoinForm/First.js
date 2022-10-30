import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { goForward } from '../Action';



function First(props) {

  const configuration = {
    method: "post",
    url: "http://localhost:9000/register",
    data: {
      email,
      password,
    },
  }

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    axios(configuration).then((result) => { setRegister(true) }).catch((error) => { error = new Error(); })
    alert("Registered");
  }

  const dispatch = useDispatch();
  const [effect, seteffect] = useState("");
  return (
    <div className={`${effect}`}>
      <div className={`flex justify-center h-full ${props.transform}`}>
        <form className="p-6 border-[1px] rounded-lg flex flex-col items-center space-y-3 shadow-md bg-white h-max ">
          <div className="pb-3 font-mulish font-extrabold text-[22px] text-primary_text">
            Create your Account
          </div>
          <input
            className="p-2 border-[1px] border-black/25 rounded-md w-96  focus:outline-none focus:border-primary_text"
            placeholder="Email Id"
            type={"email"}
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <div className="flex flex-col space-y-1">
            <input
              className="p-2 border-[1px] border-black/25 rounded-md w-96  focus:outline-none focus:border-primary_text"
              placeholder="Password"
              type={"password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <input
              className="p-2 border-[1px] border-black/25 rounded-md w-96 focus:outline-none focus:border-primary_text"
              placeholder="Confirm Password"
              type={"password"}
            />
          </div>
          <div className="flex justify-center pt-2 w-full">
            <button className="w-fit bg-primary_text py-1 px-6 text-white font-extrabold text-xl font-mulish rounded-md shadow-md"
              onClick={() => { dispatch(goForward()); seteffect("animate-fadeOut"); handleSubmit(); }}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default First;
