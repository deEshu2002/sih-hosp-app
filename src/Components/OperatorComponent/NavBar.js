import React from "react";
import { useDispatch } from "react-redux";
import {goBeds, goTests, goMedicine, goPDB, goNewNode, goDef} from '../Action/index';
import caduceus from '../cad.png';
import node from './node.png';
import { connect } from "react-redux";

const mapStatetoProps=state=>{
  return{
    component:state.ViewChange,
  }
}



const NavBar = (props)=>{
  const dispatch=useDispatch();

  const tw="font-bold text-base font-mulish hover:text-primary_text cursor-pointer ";
  const active="text-primary_text";
  const inactive="text-slate-400";

  return (
    <>
      <nav className=" bg-primary_bg w-full flex flex-col max-h-screen">
        <div className="mt-7 px-7 flex flex-col h-screen">
          <div className="flex mb-3">
              <a href="/">
              <h3 className="text-2xl text-slate-900 font-semibold px-auto font-raleway inline-block">
                cam<span className="text-primary_text">link</span>
              </h3></a>
              <img src={caduceus} alt="" className="w-10 h-10 -mt-1 ml-1"/>
            
          </div>
          <div className=" divide-y divide-blue-800 grid content-between h-full">
            <div className="divide-y divide-blue-800 ">
              <div>
                <ul className="mt-3 ml-1">
                  <li className="mb-4 text-base" onClick={()=>{dispatch(goDef());}}>
                      <div className={props.component===1? tw.concat(active):tw.concat(inactive)} >
                        Overview
                      </div>
                  </li>
                  <li className="mb-4 text-base" onClick={()=>{dispatch(goBeds());}}>
                      <div className={props.component===2? tw.concat(active):tw.concat(inactive)}>
                        Beds
                      </div>
                  </li>
                  <li className="mb-4 text-base" onClick={()=>{dispatch(goTests());}}>
                      <div className={props.component===3? tw.concat(active):tw.concat(inactive)}>
                        Tests
                      </div>
                  </li>
                  <li className="mb-4 text-base" onClick={()=>{dispatch(goMedicine());}}>
                      <div className={props.component===4? tw.concat(active):tw.concat(inactive)}>
                        Medicine
                      </div>
                  </li>
                </ul>
              </div>
              <div>
                <div className="pt-4">
                  <button className="bg-primary_text font-mulish font-normal text-base text-white py-2 w-full rounded hover:-translate-y-px hover:shadow-xl duration-200 " 
                   onClick={()=>{dispatch(goNewNode());}}>
                    <div className="grid grid-flow-col content-between py-1"><img src={node} alt="" className="w-4 h-4 justify-self-end mr-4 mt-1"/><p className="justify-self-start">Create Node</p></div>
                  </button>
                  <div className="font-bold text-base font-mulish text-slate-400 hover:text-primary_text my-3 cursor-pointer">
                    Gate A
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div
                  className={props.component===6? tw.concat(active):tw.concat(inactive)}
                  onClick={()=>{dispatch(goPDB());}}
                >
                  Patient Database
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 pt-3 ">
               <div >
                <h3 className="text-lg  text-primary_text font-bold mb-2 font-mulish cursor-pointer">
                    Shreya Hospital
                  </h3>
                </div>
                <div>
                  <div className="font-medium text-slate-400 hover:text-primary_text text-base cursor-pointer">
                    Settings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default connect(mapStatetoProps)(NavBar);