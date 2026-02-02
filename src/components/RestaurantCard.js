// import { CDN_URL } from "../utils/constants";

// const RestaurantCard =(props)=> {
//   const {resData}= props;

//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     avgRating,
//     sla,
//     costForTwo
//   } = resData?.info;
// const formatDeliveryTime = (time) => {
//   if (!time) return "N/A";

//   // if time is too large, assume it's seconds
//   if (time > 100) {
//     return Math.round(time / 60) + " Mins";
//   }

//   return time + " Mins";
// };

//   return (
//     <div className="res-card m-4 p-4 w-62.5 rounded-lg bg-gray-100 hover:bg-gray-200 ">
//       <img
//         className="rounded-lg"
//         src={CDN_URL + cloudinaryImageId}
//       />
//       <h3 className="font-bold py-4 text-lg">{name}</h3>
//       {/* <h4>{cuisines.join(",")}</h4> */}
//       <h4 className="">{cuisines?.join(", ")}</h4>

//       <h4>{avgRating} ⭐</h4>
//       <h4>{costForTwo} </h4>
//       {/* <h4>{sla?.deliveryTime} Mins</h4> */}
//       <h4>{formatDeliveryTime(sla?.deliveryTime)}</h4>
//     </div>
//   );
// };

// //Higher Order Component 



//  export const withPromotedLabel= (RestaurantCard)=>{
//   return(props) =>{
//    return (
//     <div>
//       <label>Promoted</label>
//       <RestaurantCard {...props}/>
//     </div>
//    );
//  }
// } 


// export default RestaurantCard;


















import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
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
    <div className="group w-[260px] rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      
      {/* Image Section */}
      <div className="relative">
        <img
          className="h-[160px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
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
