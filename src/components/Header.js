import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState} from "react"; 
import useOnlineStatus from "../utils/useOnlineStatus";


export const Header = () => {

  const[btnNameReact ,setBtnNameReact] = useState("Login");
   const onlineStatus= useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
         <h3>Hungry Foods</h3>
      </div>
      <div className="nav-items">
        <ul>
         <li className={`status-badge ${onlineStatus ? "online" : "offline"}`}>
  {onlineStatus ? "Online" : "Offline"}
</li>
<li>
            <Link to="/">Home</Link>
            </li>
          <li>
            <Link to= "/about">About Us</Link>
            </li>
          <li>
            <Link to= "/contact">Contact Us</Link>
            </li>
            <li>
            <Link to= "/grocery">Grocery</Link>
            </li>

          <li>Cart</li>
          <button className="login" 
          onClick={() =>{
            btnNameReact === "Login"
             ? setBtnNameReact("Logout")
             : setBtnNameReact("Login");

            console.log(btnNameReact);
          }}
          
          >
            {btnNameReact}
            </button>
        </ul>
      </div>
    </div>
  );
};
