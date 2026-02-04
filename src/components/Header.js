// import { Link } from "react-router-dom";
// import { LOGO_URL } from "../utils/constants";
// import { useState} from "react"; 
// import useOnlineStatus from "../utils/useOnlineStatus";


// export const Header = () => {


//   const[btnNameReact ,setBtnNameReact] = useState("Login");
//    const onlineStatus= useOnlineStatus();
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src={LOGO_URL}
//           alt="logo"
//         />
//          <h3>Hungry Foods</h3>
//       </div>
//       <div className="nav-items">
//         <ul>
//          <li className={`status-badge ${onlineStatus ? "online" : "offline"}`}>
//   {onlineStatus ? "Online" : "Offline"}
// </li>
// <li>
//             <Link to="/">Home</Link>
//             </li>
//           <li>
//             <Link to= "/about">About Us</Link>
//             </li>
//           <li>
//             <Link to= "/contact">Contact Us</Link>
//             </li>
//             <li>
//             <Link to= "/grocery">Grocery</Link>
//             </li>

//           <li>Cart</li>
//           <button className="login" 
//           onClick={() =>{
//             btnNameReact === "Login"
//              ? setBtnNameReact("Logout")
//              : setBtnNameReact("Login");

//             console.log(btnNameReact);
//           }}
          
//           >
//             {btnNameReact}
//             </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
console.log(loggedInUser);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            className="h-12 w-12 object-contain group-hover:scale-105 transition-transform"
            src={LOGO_URL}
            alt="Hungry Foods"
          />
          <h1 className="text-xl font-bold tracking-wide text-gray-800">
            Hungry<span className="text-orange-500">Foods</span>
          </h1>
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">

            {/* Online Status */}
            <li className="hidden sm:block">
              <span
                className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold
                ${onlineStatus
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full
                  ${onlineStatus ? "bg-green-600" : "bg-red-600"}`}
                />
                {onlineStatus ? "Online" : "Offline"}
              </span>
            </li>

            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
              { name: "Grocery", path: "/grocery" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5
                             after:w-0 after:bg-orange-500 after:transition-all
                             hover:after:w-full hover:text-orange-500"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Cart */}
            <li className="relative cursor-pointer hover:text-orange-500">
              Cart
              <span className="absolute -top-2 -right-3 rounded-full bg-orange-500 px-1.5 text-xs text-white">
                0
              </span>
            </li>

            {/* Login Button */}
            <button
              onClick={() =>
                setBtnNameReact(
                  btnNameReact === "Login" ? "Logout" : "Login"
                )
              }
              className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white
                         hover:bg-orange-600 hover:shadow-lg transition-all duration-200"
            >
              {btnNameReact}
            </button>
            <li className="px-4 font-bold ">{loggedInUser}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

