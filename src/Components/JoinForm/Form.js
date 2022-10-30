import React, {useState,useEffect} from "react";
import First from './First';
import {connect} from 'react-redux';
import Second from './Second';
import Third from './Third';


const mapStatetoProps = state =>{
  return{
    currentPage:state.ChangePage,
    current:state.SendAnimation
       
  }
}

function Form(props){

  const [button, setbutton] = useState(<First/>)
  const [secondbg, setsecondbg] = useState("bg-secondary_text")
  const [thirdbg, setthirdbg] = useState("bg-secondary_text")
  const currentPage=props.currentPage;
  const current=props.current;
 
  useEffect(()=>{
    function sleep(ms){
      return new Promise(resolve=> setTimeout(resolve,ms));
    }
    async function change(){
    if(currentPage===1){
      await sleep(300);
      current&&
      setbutton(<First transform={"animate-fadeIn"}/>);
      setsecondbg("bg-secondary_text")
      
    } else if(currentPage===2){
      await sleep(300);
      setbutton(<Second transform={"animate-fadeIn"}/>);
      setsecondbg("bg-[#F7AA00]");
      setthirdbg("bg-secondary_text");
    }else if(currentPage===3){
      await sleep(300);
      setbutton(<Third transform={"animate-fadeIn"}/>);
      setthirdbg("bg-[#F7AA00]");
      setsecondbg("bg-[#F7AA00]");
    }
    }change()
  },[currentPage,current])
 
  
  return(
    <>
      <div className="flex flex-col h-max transition-transform">
        <div className=" h-1/4 mt-12 mb-8 flex flex-col justify-center">
          <div className="flex flex-row justify-center">
            <div className="w-20 h-max bg-[#F7AA00] rounded-md">
            <div className="text-white text-center py-3 text-xl font-bold font-poppins">
              1
            </div>
          </div>
          <div className={`w-40 h-[2px] place-self-center ${secondbg}` }></div>
          <div className={`h-max w-20  rounded-md ${secondbg}`}>
            <div className="text-white text-center py-3 text-xl font-bold  font-poppins">
              2
            </div>
          </div>
          <div className={`w-40 h-[2px] place-self-center ${thirdbg}`}></div>
          <div className={`h-max w-20  rounded-md ${thirdbg}`}>
            <div className="text-white text-center py-3 text-xl font-bold font-poppins">
              3
            </div>
          </div>

          </div>
          <div className="flex flex-row justify-center gap-40 w-full">
            <div className="text-primary_text text-center py-3 text-base font-bold font-raleway  ">
              Account Setup
            </div>
            <div className="text-primary_text text-center py-3 text-base font-bold font-raleway mr-4">
              Details
            </div>
          
            <div className="text-primary_text text-center py-3 text-base font-bold font-raleway">
              Detail Proof
            </div>
          </div>


        </div>
        <div className="h-fit flex justify-center ">
        {button}
        </div>
      </div>
    </>
  );
}


export default connect(mapStatetoProps)(Form); 