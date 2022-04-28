import React,{useState, useEffect} from "react";
import NavBar from "./OperatorComponent/NavBar";
import Overview from "./OperatorComponent/Hosp/HospOverview";
import { connect } from "react-redux";
import CreateNode from './OperatorComponent/Hosp/CreateNode';
import Beds from './OperatorComponent/Hosp/Beds';
import Tests from './OperatorComponent/Hosp/Test';
import Medicine from './OperatorComponent/Hosp/Medicine';
import PatientDataBase from './OperatorComponent/Hosp/PatientDataBase';



const mapStatetoProps=state=>{
  return{
    component:state.ViewChange,
  }
}


const OperatorScreen = (props) => {


  const [current,setcurrent]=useState(<Overview/>);

  useEffect(()=>{
    if(props.component===2){
      setcurrent(<Beds/>)
    }
    else if(props.component===3){
      setcurrent(<Tests/>)
    }
    else if(props.component===4){
      setcurrent(<Medicine/>)
    }
    else if(props.component===5){
      setcurrent(<CreateNode/>)
    }
    else if(props.component===6){
      setcurrent(<PatientDataBase/>)
    }
    else if(props.component===1){setcurrent(<Overview/>)}
  },[props.component])

  return (<>
    <div className="flex flex-row w-full h-screen ">
    <div className="basis-1/5"><NavBar /></div>
    <div className="basis-4/5">{current}</div>
    </div>
    </>
  );
};

export default connect(mapStatetoProps)(OperatorScreen);
