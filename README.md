Food Ordering App


/**
 *-Header
 -Logo
 -nav-items
 * Body
 -Search
 -Restaurant Card
   -img
   -name of res, star rating, cuisine,delivery tie
 * -Footer
   -Copyright
   - Links
   -Address
   -Contact
 */




//EXtra CODE//

 // import { useState, useEffect } from "react";
// import RestaurantCard from "./RestaurantCard";

// const Body = () => {
//   const [listofRestaurants, setListofRestaurant] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.3410822&lng=75.02278059999999&str=restaurants&trackingId=0729343f-5489-b293-4144-244bbafb47f4&submitAction=ENTER&queryUniqueId=61d57d0e-083d-2ebf-fddd-79d81ee73e60"
//       );
//       const json = await response.json();

//       // Filter and extract only valid restaurant info
//       const restaurants =
//         json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
//           ?.filter((item) => item.card?.card?.info) // remove banners/ads
//           .map((item) => item.card.card.info); // extract info for RestaurantCard

//       setListofRestaurant(restaurants);
//     } catch (error) {
//       console.error("Error fetching restaurants:", error);
//     }
//   };

//   // Filter top-rated restaurants
//   const filterTopRated = () => {
//     const filteredList = listofRestaurants.filter(
//       (res) => parseFloat(res.avgRating) > 4
//     );
//     setListofRestaurant(filteredList);
//   };

//   return (
//     <div className="body">
//       <div className="filter">
//         <button className="filter-btn" onClick={filterTopRated}>
//           Top Rated Restaurants
//         </button>
//       </div>

//       <div className="res-container">
//         {listofRestaurants.map((restaurant) => (
//           <RestaurantCard key={restaurant.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;





import { useEffect } from "react";

const RestaurantMenu =() =>{

    useEffect(() =>{
        fetchMenu();
    } ,[]);

    const fetchMenu = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.339935&lng=75.0235505&restaurantId=238062&catalog_qa=undefined&submitAction=ENTER"
        );
       const json = await data.json(); 

        console.log(json);
    // }
    return(
        <div className="menu">
            <h1>Name of the Restaurants </h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Pav Bhaji</li>
                <li>Rasgulla</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};
}
export default RestaurantMenu;






import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    const [resInfo , setResInfo]= useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu =  async ()=> {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.339935&lng=75.0235505&restaurantId=194157&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
       
      console.log(json);
      setResInfo(json.data);
    };
    
    return resInfo === null ?
    (<Shimmer/>):(
     <div className="Menu">
        <h1>{resInfo.data.cards[2].card.card.info.name}</h1>
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



  // const fetchMenu = async () => {
  //   const res = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.668866948481604&lng=75.82979053258896&restaurantId=806683&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const json = await res.json();
  //   setResInfo(json?.data);
  // };