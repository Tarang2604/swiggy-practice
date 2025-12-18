import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=> {
  const {resData}= props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo
  } = resData;

const costInRupees = costForTwo /100;

const formatDeliveryTime = (time) => {
  if (!time) return "N/A";

  // if time is too large, assume it's seconds
  if (time > 100) {
    return Math.round(time / 60) + " Mins";
  }

  return time + " Mins";
};

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      {/* <h4>{cuisines.join(",")}</h4> */}
      <h4>{cuisines?.join(", ")}</h4>

      <h4>{avgRating} ⭐</h4>
      <h4>{costInRupees} For Two</h4>
      {/* <h4>{sla?.deliveryTime} Mins</h4> */}
      <h4>{formatDeliveryTime(sla?.deliveryTime)}</h4>
    </div>
  );
};
export default RestaurantCard;