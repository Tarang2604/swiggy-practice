import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
 
  //Whenever state Variables updates, react triggers a reconciliation cycle (re-render the component)
  console.log("Body Rendered")

  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.668866948481604&lng=75.82979053258896&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // console.log(json);
    setListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if (!listofRestaurants?.length == 0) {
  //   return <Shimmer />;
  if (!filteredRestaurants?.length) {
    return <Shimmer />;
  }

  

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text "
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              //filter the restaurant cards
              //searchText
              const filteredRestaurants = listofRestaurants.filter(
                (res) =>
                  res?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
              );
             
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info?.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
            console.log(listofRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
