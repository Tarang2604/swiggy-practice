import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect} from "react"; 
import { Link } from "react-router-dom";


export const Header = () => {

  const[btnNameReact ,setBtnNameReact] = useState("Login");
  console.log("Header render")
  // when there is no dependencies => useEffect render every time 
  // When there is empty dependencies => useEffect Render once{or is called on initial render} 
  // When there is [name dependency] => it is render every time when namedependency states changes or updated  
  useEffect(()=>{
   console.log("useEffect Called ");
  }, [btnNameReact]);
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
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
            <Link to= "/about">About Us</Link>
            </li>
          <li>
            <Link to= "/contact">Contact Us</Link>
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
