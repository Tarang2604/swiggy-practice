import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () =>{
    const [resInfo , setResInfo]= useState(null);
     useEffect(()=>{
        fetchMenu();
     },[]);
     const fetchMenu =  async()=>{
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.339935&lng=75.0235505&restaurantId=238062&catalog_qa=undefined&submitAction=ENTER");
       const json = await data.json();
       console.log(json);
       setResInfo(json.data)
     };
    
    return resInfo === null ?
    (<Shimmer/>):(
     <div className="Menu">
        
            <h1>name</h1>
            <h2>Menu</h2>
            <ul>
            <li>Biryani</li>
            <li>Fried Rice</li>
            <li>Manchurian</li>
        </ul>
     </div>
    );
};
export default RestaurantMenu;