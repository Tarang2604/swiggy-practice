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


// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";


// const RestaurantMenu = () => {
//   const { resId } = useParams(); // just for routing
  
//   const resInfo = useRestaurantMenu(resId);
//   if (resInfo === null) return <Shimmer />;

//   const restaurantInfo =
//     resInfo?.cards
//       ?.find((c) => c?.card?.card?.info)
//       ?.card?.card?.info;

//   const itemCards =
//     resInfo?.cards
//       ?.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR)
//       ?.groupedCard?.cardGroupMap?.REGULAR?.cards
//       ?.find((c) => c?.card?.card?.itemCards)
//       ?.card?.card?.itemCards;

//   return (
//     <div className="menu">
//       <h1>{restaurantInfo?.name}</h1>
//       <p>{restaurantInfo?.cuisines?.join(", ")}</p>
//       <p>{restaurantInfo?.costForTwoMessage}</p>

//       <h2>Menu</h2>
//       <ul>
//         {itemCards?.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} – ₹
//             {(item.card.info.price ||
//               item.card.info.defaultPrice) / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;






import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const[showIndex , setShowIndex]= useState(null)

  // Loading state
  if (!resInfo) return <Shimmer />;

  // Restaurant Info
  const restaurantInfo = resInfo?.cards?.find(
    (c) => c?.card?.card?.info
  )?.card?.card?.info;

  // Menu Items
  const regularCards = resInfo?.cards?.find(
    (c) => c?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCards = regularCards
    ?.map((c) => c?.card?.card?.itemCards)
    ?.flat()
    ?.filter(Boolean);

    const categories = regularCards?.filter(
  (c) =>
    c?.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);


  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Restaurant Details */}
      <h1 className="text-2xl font-bold ">{restaurantInfo?.name}</h1>
      <p className="text-gray-600">
        {restaurantInfo?.cuisines?.join(", ")}
      </p>
      <p className="font-medium">
        {restaurantInfo?.costForTwoMessage}
      </p>

      {categories?.map((category, index) => (
        //controlled components 
  <RestaurantCategory
    key={category?.card?.card?.title}
    data={category?.card?.card}
    showItems={ index === showIndex? true:false}
    setShowIndex ={()=> setShowIndex(index)}
  />
))};


      {/* Menu
      <h2 className="mt-6 mb-3 text-xl font-semibold">Menu</h2>

      <ul className="space-y-3">
        {itemCards?.map((item) => {
          const info = item?.card?.info;
          return (
            <li
              key={info?.id}
              className="flex justify-between border-b pb-2"
            >
              <span>{info?.name}</span>
              <span className="font-medium">
                ₹{(info?.price || info?.defaultPrice) / 100}
              </span>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;


