// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//    const [resInfo, setResInfo] = useState(null);  

//     const fetchMenu = async () => {
//       try{const res = await fetch(
//       "https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.339935&lng=75.0235505&restaurantId=156037"
//     );
//      console.log(res);
//     const json = await res.json(); 
//     console.log(json);
//     setResInfo(json?.data);
//   }
  
//   catch(e){
//    console.log(e)
//   }}
// useEffect(() => {
//     fetchMenu();
//   }, []);
  


//   if (resInfo ===null) return <Shimmer/>;

//   return (
//     <div className="menu">
//       <h1>Name of the Restaurant</h1>
//     </div>
//   );
// };

// export default RestaurantMenu;


import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
  const { resId } = useParams(); // just for routing
  
  const resInfo = useRestaurantMenu(resInfo);
  if (resInfo === null) return <Shimmer />;

  const restaurantInfo =
    resInfo?.cards
      ?.find((c) => c?.card?.card?.info)
      ?.card?.card?.info;

  const itemCards =
    resInfo?.cards
      ?.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.find((c) => c?.card?.card?.itemCards)
      ?.card?.card?.itemCards;

  return (
    <div className="menu">
      <h1>{restaurantInfo?.name}</h1>
      <p>{restaurantInfo?.cuisines?.join(", ")}</p>
      <p>{restaurantInfo?.costForTwoMessage}</p>

      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} – ₹
            {(item.card.info.price ||
              item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
