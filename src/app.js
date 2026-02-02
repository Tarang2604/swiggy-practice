// import React, { lazy, Suspense } from "react";
// import ReactDOM from "react-dom/client";
// import { Header } from "./components/Header.js";
// import Body from "./components/Body";
// import About from "./components/About.js";
// import Contact from "./components/Contact.js";
// import Error from "./components/Error.js";
// import RestaurantMenu from "./components/RestaurantMenu.js";
// import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
// import "./index.css";



//  const Grocery = lazy(()=> import("./components/Grocery.js"));
// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Outlet />
//     </div>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path:"/",
//     element : <AppLayout/>,
//     children:[
//     {
//       path: "/",
//       element:<Body/>,
//     },
//     {
//     path:"/about",
//     element:<About/>,
    
//   },
//   {
//    path: "/contact",
//    element :<Contact/>
//   },
//   {
//    path: "/grocery",
//    element :(
//     <Suspense fallback ={
//       <h1>Loading.....🔃🔃</h1>
//     }><Grocery/></Suspense>
//    )
//   },
//   {
//     path: "/restaurants/:resId",
//     element :<RestaurantMenu/>
//   }
//     ],
//     errorElement:<Error/>,
//   },
  
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router = {appRouter}/>);



import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.js";
import Body from "./components/Body";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./index.css";

const Grocery = lazy(() => import("./components/Grocery.js"));

/* ---------- App Layout ---------- */
const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

/* ---------- Router ---------- */
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-[60vh]">
                <h1 className="text-xl font-semibold text-gray-600 animate-pulse">
                  Loading... 🔃🔃
                </h1>
              </div>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

/* ---------- Render ---------- */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
