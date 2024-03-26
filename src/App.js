import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from "../src/components/Users/Register"
import Login from "./components/Users/Login"
import Dashboard from './components/Users/Dashboard';
import PublicNavbar from "../src/components/Navbar/PublicNavbar"
import PrivateNavbar from "../src/components/Navbar/PrivateNavbar"
import Home from './components/Home/Home';
import GenerateContent from "../src/components/ContentGeneration/GenerateContent"
import { useAuth } from './AuthContext/AuthContext';


//NavBar being displayed in all of the pages
//all component in the route have to have the path to it
function App() {
  const  {isAuthenticated} = useAuth()
  return (
    <BrowserRouter>
      {isAuthenticated?<PrivateNavbar/> : <PublicNavbar/>}
      <Routes>
        <Route path = "/register" element = {<Registration/>}/> {/* This is the component to be rendered, actual path on the server inside is the actual component to be rendered*/}
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/generate-content" element = {<GenerateContent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
