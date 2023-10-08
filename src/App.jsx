import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import HomeNavbar from "./components/Navs/HomeNavbar";
import Footer from "./components/Footer/Footer"
import GlobalNavbar from "./components/Navs/GlobalNavbar";
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {BiPhone} from 'react-icons/bi'
import {BiLogoGmail} from 'react-icons/bi'
import {AiFillLock} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import { Provider } from "react-redux";
import store from './Store';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <Provider store={store}>
    <GlobalNavbar list={[{icons:<AiOutlineQuestionCircle/>,name:"Have a question?",},
    {icons:<BiPhone/>,name:"10 20 123 456",},
    {icons:<BiLogoGmail/>,name:"info@gmail.com"},
    {icons:<AiFillLock/>,name:"Log in"},
    {icons:<BsFillPersonFill/>,name:"Register?"}]}/>
      <HomeNavbar logo="Learner" button="Enroll Now" />
      <Outlet />
      <Toaster/>
      <Footer />
    </Provider>
  );
}

export default App;
