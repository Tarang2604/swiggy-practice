import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();

    const restaurants =
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants || [];

    setListofRestaurant(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-red-500">
          You're Offline 🚫
        </h1>
        <p className="text-gray-500 mt-2">
          Please check your internet connection
        </p>
      </div>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (!filteredRestaurants?.length) {
    return <Shimmer />;
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* overlay */}
      <div className="min-h-screen bg-white/70 backdrop-blur-sm">

        <div className="max-w-7xl mx-auto px-5 py-10">

          {/* Filter Panel */}
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 mb-10">

            <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">

              {/* Search */}
              <div className="flex gap-2 w-full lg:w-auto">
                <input
                  type="text"
                  placeholder="Search restaurants..."
                  className="w-full lg:w-72 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />

                <button
                  className="px-6 py-2 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 shadow-md transition"
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

              {/* Top Rated */}
              <div>
                <button
                  className="px-6 py-2 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-500 shadow-md transition"
                  onClick={() => {
                    const filteredList = listofRestaurants.filter(
                      (res) => res.info?.avgRating > 4
                    );
                    setFilteredRestaurants(filteredList);
                  }}
                >
                  ⭐ Top Rated
                </button>
              </div>

              {/* Username */}
              <div className="flex items-center gap-3">
                <label className="font-semibold text-gray-700">
                  User :
                </label>
                <input
                  className="border border-gray-300 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  value={loggedInUser}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Your name"
                />
              </div>

            </div>
          </div>

          {/* Restaurants Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant?.info?.id}
                to={"/restaurants/" + restaurant?.info?.id}
                className="group"
              >
                <div className="transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.03]">

                  {restaurant?.info?.promoted ? (
                    <RestaurantCardPromoted resData={restaurant} />
                  ) : (
                    <RestaurantCard resData={restaurant} />
                  )}

                </div>
              </Link>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Body;





                               // Chat Gpt tailwind


// import { useState, useEffect , useContext} from "react";
// import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
// const Body = () => {
//   const [listofRestaurants, setListofRestaurant] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       // "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.668866948481604&lng=75.82979053258896&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    
//       "https://namastedev.com/api/v1/listRestaurants"
//     );
//     const json = await data.json();

//     const restaurants =
//       // json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//       //   ?.restaurants;
//        json?.data?.data?.cards?.[1]?.card?.card?.gridElements
//     ?.infoWithStyle?.restaurants || [];

//     setListofRestaurant(restaurants);
//     setFilteredRestaurants(restaurants);
//   };

//   const onlineStatus = useOnlineStatus();
//   if (!onlineStatus) {
//     return (
//       <h1 className="flex justify-center items-center h-screen text-2xl font-semibold text-red-500">
//         Looks like you're offline! 🚫 Check your internet connection
//       </h1>
//     );
//   }
   
//    const {loggedInUser, setUserName}= useContext(UserContext);

//   if (!filteredRestaurants?.length) {
//     return <Shimmer />;
//   }

 
//   return (
//     <div className="px-6 py-4 max-w-7xl mx-auto">
//       {/* Filter Section */}
//       <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
//         {/* Search */}
//         <div className="flex gap-2 w-full md:w-auto">
//           <input
//             type="text"
//             placeholder="Search restaurants..."
//             className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <button
//             className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
//             onClick={() => {
//               const filtered = listofRestaurants.filter((res) =>
//                 res?.info?.name
//                   ?.toLowerCase()
//                   .includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurants(filtered);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div className="search m-4 p-4 flex items-center">
//            <button
//           className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
//           onClick={() => {
//             const filteredList = listofRestaurants.filter(
//               (res) => res.info?.avgRating > 4
//             );
//             setFilteredRestaurants(filteredList);
//           }}
//         >
//           ⭐ Top Rated Restaurants
//         </button>
//         </div>
//         <div className="search m-4 p-4 flex items-center">
//           <label className="font-semibold">UserName : </label>
//           <input className="border border-black p-2 " 
//           value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}></input>
//         </div>
//       </div>
      
//       {/* Restaurants Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredRestaurants.map((restaurant) => (
//           <Link
//             key={restaurant?.info?.id}
//             to={"/restaurants/" + restaurant?.info?.id}
//           >
//             {restaurant?.info?.promoted ?(
//               <RestaurantCardPromoted resData={restaurant}/>
//             ): (
//             <RestaurantCard resData={restaurant} 
//             />)
//             }
           
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

