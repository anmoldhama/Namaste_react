import { logo_url } from "../utils/constants";
import {useState} from "react";

const Header = ()=>{

const [changeButton, setChangeButton] = useState("Login");

const loginButtonHandler = () =>{
    changeButton === "Login" ? setChangeButton("Logout") : setChangeButton("Login");
}

    return (<div className="nav-items">
        <div>
        <img className="logo" src={logo_url}/>
        </div>
        <ul>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact Us</li>
         <li>Cart</li>
         <button onClick={loginButtonHandler}>{changeButton}</button>
        </ul>
    </div>)
}

export default Header;