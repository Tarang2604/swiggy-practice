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
      // "https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.3410822&lng=75.02278059999999&str=restaurants&trackingId=0729343f-5489-b293-4144-244bbafb47f4&submitAction=ENTER&queryUniqueId=61d57d0e-083d-2ebf-fddd-79d81ee73e60"
      

      " https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3413908&lng=75.023311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // console.log(json);
    setListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (listofRestaurants.length == 0) {
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
                (res)=>
                  res?.card?.card?.info?.name
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
              (res) => res.card?.card?.info?.avgRating > 4
            );
            setListofRestaurant(filteredList);
            console.log(listofRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;


