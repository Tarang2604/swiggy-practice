// import { useState } from "react";
// import ItemList from "./ItemList";

// const RestaurantCategory =({data , showItems , setShowIndex , dummy })=>{
//   //BEfore this swtShowIndex accordian controlling themselfes but after the setShowIndex it is controlled by the parents (restaurantMenu.js).with the help of setshowItems.  
  
//   // const[showItems, setShowItems]= useState(false);
//   const handleClick =() =>{
//     setShowIndex();
//   //  setShowItems(!showItems);
//   };
//     return(
//         <div>
//             {/*Header*/}
//           <div className=" w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
//             <div className="flex justify-between cursor-pointer" onClick={handleClick}>
//                 <span className="font-bold text-lg">
//                 {data.title}
//                 ({data.itemCards.length})
//             </span>
//             <span>⬇️</span>
//             </div>
//             {showItems && <ItemList items= {data.itemCards} dummy ={dummy}/>}
            
//           </div>
//         </div>
//     )
// }

// export default RestaurantCategory;



import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // Controlled by parent (RestaurantMenu.js)

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="max-w-3xl mx-auto my-4 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">

        <div
          className="flex justify-between items-center cursor-pointer px-5 py-4 hover:bg-orange-50 transition"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg text-gray-800">
            {data.title}
            <span className="ml-2 text-sm text-gray-500">
              ({data.itemCards.length})
            </span>
          </span>

          <span
            className={`transform transition-transform duration-300 ${
              showItems ? "rotate-180" : ""
            }`}
          >
            ⌄
          </span>
        </div>

        {/* Items */}
        {showItems && (
          <div className="px-4 pb-4">
            <ItemList items={data.itemCards} dummy={dummy} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;




