import { logo_url } from "../utils/constants";


const Header = ()=>{
    return (<div className="nav-items">
        <div>
        <img className="logo" src={logo_url}/>
        </div>
        <ul>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact Us</li>
         <li>Cart</li>
        </ul>
    </div>)
}

export default Header;