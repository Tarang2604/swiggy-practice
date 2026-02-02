// import { useState, useEffect } from "react";
// import RestaurantCard from "./RestaurantCard";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const Body = () => {
//   const [listofRestaurants, setListofRestaurant] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");
 
//   //Whenever state Variables updates, react triggers a reconciliation cycle (re-render the component)
//   console.log("Body Rendered")

//   useEffect(() => {
//     fetchData();
//   }, []);
 
//   const fetchData = async () => {
//     const data = await fetch(
//       "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.668866948481604&lng=75.82979053258896&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.339935&lng=75.0235505&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

//     const json = await data.json();
//     console.log(
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );

//     // console.log(json);
//     setListofRestaurant(
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilteredRestaurants(
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };

//   const onlineStatus = useOnlineStatus();
//   if
//   (onlineStatus === false)
//    return(<h1>Looks like You're Offline ! Check Your Internet Connection</h1>

//    );

//   // if (!listofRestaurants?.length == 0) {
//   //   return <Shimmer />;
//   if (!filteredRestaurants?.length) {
//     return <Shimmer />;
//   }
//   return (
//     <div className="body">
//       <div className="filter flex">
//         <div className="search m-4 p-4">
//           <input
//             type="text "
//             className=" border border-solid border-black"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <button
//           className="px-4 py-2 bg-green-100 m-4 rounded-lg"
//             onClick={() => {
//               //filter the restaurant cards
//               //searchText
//               const filteredRestaurants = listofRestaurants.filter(
//                 (res) =>
//                   res?.info?.name
//                     ?.toLowerCase()
//                     .includes(searchText.toLowerCase())
//               );
             
//               setFilteredRestaurants(filteredRestaurants);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div className="search m-4 p-4 flex items-center">
//           <button
//           className="px-4 py-2 bg-gray-50 rounded-lg"
//           onClick={() => {
//             const filteredList = listofRestaurants.filter(
//               (res) => res.info?.avgRating > 4
//             );
//             setFilteredRestaurants(filteredList);
//             console.log(listofRestaurants);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//         </div>
        
//       </div>
//       <div className="flex flex-wrap">
//         {filteredRestaurants?.map((restaurant) => (
//          <Link
//          key={restaurant?.info?.id}
//           to={"/restaurants/" + restaurant?.info?.id}><RestaurantCard
            
//             resData={restaurant}/></Link> 
          
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;



                               // Chat Gpt tailwind


import { useState, useEffect } from "react";
import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.668866948481604&lng=75.82979053258896&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.339935&lng=75.0235505&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://namastedev.com/api/v1/listRestaurants"
    );
    const json = await data.json();

    const restaurants =
      // json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        // ?.restaurants;
       json?.data?.data?.cards?.[1]?.card?.card?.gridElements
    ?.infoWithStyle?.restaurants || [];

    setListofRestaurant(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1 className="flex justify-center items-center h-screen text-2xl font-semibold text-red-500">
        Looks like you're offline! 🚫 Check your internet connection
      </h1>
    );
  }

  if (!filteredRestaurants?.length) {
    return <Shimmer />;
  }

  return (
    <div className="px-6 py-4 max-w-7xl mx-auto">
      {/* Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
        {/* Search */}
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            onClick={() => {
              const filtered = listofRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info?.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          ⭐ Top Rated Restaurants
        </button>
      </div>

      {/* Restaurants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.promoted ?(
              <RestaurantCardPromoted resData={restaurant}/>
            ): (
            <RestaurantCard resData={restaurant} 
            />)
            }
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

