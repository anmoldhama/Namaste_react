import { logo_url } from "../utils/constants";
import {useState} from "react";
import {Link} from 'react-router-dom';

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
            <li>
         <Link to="/">Home</Link>
         </li>
          <li>
         <Link to="/about">About Us</Link>
         </li>
         <li>
         <Link to="/contact">Contact Us</Link>
         </li>
         <li>
         <Link to="/grocery">Grocery</Link>
         </li>
         <li>Cart</li>
         <button onClick={loginButtonHandler}>{changeButton}</button>
        </ul>
    </div>)
}

export default Header;