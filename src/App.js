import { Routes, Route} from "react-router-dom";
import FrontPage from "./Components/FrontPage";
import Features from './Components/FrontPage/Features';
import Volunteer from './Components/FrontPage/Volunteer';
import About from './Components/FrontPage/About';
import Contacts from './Components/FrontPage/Contacts';
import SignIn from './Components/FrontPage/SignIn';
import NodeSignIn from './Components/FrontPage/NodeSignIn';
import JoinForm from './Components/JoinForm';
import Help from './Components/FrontPage/Help';
import TAndC from './Components/FrontPage/TAndC';
import PrivAndPol from './Components/FrontPage/PrivAndPol';
import OperatorNav from './Components/OperatorScreen';



function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" index element={<FrontPage/>}/>
       <Route path="features" element={<Features/>}/>
       <Route path="volunteer" element={<Volunteer/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="contact" element={<Contacts/>}/>
       <Route path="signIn" element={<SignIn/>}/>
       <Route path="nodeSignIn" element={<NodeSignIn/>}/>
       <Route path="joinForm" element={<JoinForm/>}/>
       <Route path="/:uniqueID/dashboard" element={<OperatorNav/>}/>
       <Route path="help" element={<Help/>}/>
       <Route path="tAndC" element={<TAndC/>}/>
       <Route path="privAndPol" element={<PrivAndPol/>}/>
     </Routes>
    </div>
  );
}

export default App;
