
///After tailwind css improved
// import { useContext } from "react";
// import { CDN_URL } from "../utils/constants";
// import UserContext from "../utils/UserContext";

// const RestaurantCard = ({ resData }) => {
//   const { loggedInUser } = useContext(UserContext);

//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     avgRating,
//     sla,
//     costForTwo,
//   } = resData?.info;

//   const formatDeliveryTime = (time) => {
//     if (!time) return "N/A";
//     if (time > 100) return Math.round(time / 60) + " Mins";
//     return time + " Mins";
//   };

//   return (
//     <div className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">

//       {/* Image */}
//       <div className="relative overflow-hidden">
//         <img
//           className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
//           src={CDN_URL + cloudinaryImageId}
//           alt={name}
//         />

//         {/* Rating badge */}
//         <span
//           className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full text-white shadow
//             ${avgRating >= 4 ? "bg-emerald-500" : "bg-orange-500"}`}
//         >
//           ⭐ {avgRating}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="p-4 space-y-1.5">

//         <h3 className="text-lg font-semibold text-gray-800 truncate">
//           {name}
//         </h3>

//         <p className="text-sm text-gray-500 line-clamp-2">
//           {cuisines?.join(", ")}
//         </p>

//         <div className="flex items-center justify-between pt-2 text-sm text-gray-600">
//           <span className="font-medium text-gray-700">
//             {costForTwo}
//           </span>

//           <span className="flex items-center gap-1">
//             ⏱ {formatDeliveryTime(sla?.deliveryTime)}
//           </span>
//         </div>

//         {/* Logged user (small and subtle) */}
//         <p className="text-xs text-gray-400 pt-1">
//           Viewing as: <span className="font-medium">{loggedInUser}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div className="relative">

//         {/* Promoted badge */}
//         <span className="absolute z-10 top-3 right-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
//           Promoted
//         </span>

//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

// export default RestaurantCard;



















import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const {loggedInUser} = useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
  } = resData?.info;

  const formatDeliveryTime = (time) => {
    if (!time) return "N/A";
    if (time > 100) return Math.round(time / 60) + " Mins";
    return time + " Mins";
  };

  return (
    <div className="group w-65 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      
      {/* Image Section */}
      <div className="relative">
        <img
          className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />

        {/* Rating Badge */}
        <span
          className={`absolute top-3 left-3 px-2 py-1 text-sm font-semibold rounded-lg text-white
            ${avgRating >= 4 ? "bg-green-600" : "bg-orange-500"}`}
        >
          ⭐ {avgRating}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {name}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {cuisines?.join(", ")}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-600 pt-2">
          <span className="font-medium">{costForTwo}</span>
          <span className="flex items-center gap-1">
            ⏱ {formatDeliveryTime(sla?.deliveryTime)}
          </span>
          <h4>User:{loggedInUser}</h4>
        </div>
      </div>
      
    </div>


  );
};

export const withPromotedLabel= (RestaurantCard)=>{
  return(props) =>{
   return (
    <div>
      <label>Promoted</label>
      <RestaurantCard {...props}/>
    </div>
   );
 }
} 



export default RestaurantCard;
