import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
const cartItems = useSelector((store)=> store.cart.items);

const disptach = useDispatch();
const handleClearCart = ()=>{
    disptach(clearCart());
}
return (
        <div className="text-center m-10 p-10">
           <h1 className="text-xl font-bold bg-gray-300 border border-black"> Cart</h1>
          <button className="p-2  m-2 bg-black text-white rounded-lg" 
          onClick={handleClearCart}>Clear Cart</button>
           {cartItems.length ===0 && 
           <h1>
            Please Add Some Items. Cart Is Empty!!
            </h1>}
           <div className="w-6/12 m-auto ">
           <ItemList items={cartItems}/>
           </div>
        </div>
    )
  
}

export default Cart



                                 //Tailwind improved code 


// import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
// import { clearCart } from "../utils/cartSlice";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);

//   const disptach = useDispatch();

//   const handleClearCart = () => {
//     disptach(clearCart());
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80')",
//       }}
//     >
//       {/* overlay */}
//       <div className="min-h-screen bg-white/80 backdrop-blur-sm py-12">

//         <div className="max-w-4xl mx-auto px-4">

//           {/* Header Card */}
//           <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 text-center">

//             <h1 className="text-3xl font-bold text-gray-800 mb-3">
//               🛒 Your Cart
//             </h1>

//             <button
//               className="px-5 py-2 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition shadow"
//               onClick={handleClearCart}
//             >
//               Clear Cart
//             </button>

//           </div>

//           {/* Empty cart message */}
//           {cartItems.length === 0 && (
//             <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
//               <h1 className="text-xl font-semibold text-gray-700">
//                 Your cart is empty 😕
//               </h1>
//               <p className="text-gray-500 mt-2">
//                 Please add some delicious items to your cart!
//               </p>
//             </div>
//           )}

//           {/* Items list */}
//           {cartItems.length > 0 && (
//             <div className="bg-white rounded-2xl shadow-lg p-6">
//               <div className="max-w-2xl mx-auto">
//                 <ItemList items={cartItems} />
//               </div>
//             </div>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
