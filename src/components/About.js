// import User from "./User";
// import UserClass from "./UserClass";
// import { Component } from "react";
// import UserContext from "../utils/UserContext";

// class About extends Component {
//   constructor(props) {
//     super(props);
//     // console.log("Parent Constructor")
//     // console.log("Parent2 constructor")
//   }
//   componentDidMount() {
//     // console.log("Parent ComponentDidMount");
//   }

//   render() {
//     //         // console.log("Parent Render")
//     return (
//       <div>
//         <h1>About Class Component</h1>
//         <div>
//           LoggedIn User
//           <UserContext.Consumer>
//             {({ loggedInUser }) => (
//               <h1 className="text-xl  font-bold">{loggedInUser}</h1>
//             )}
//           </UserContext.Consumer>
//         </div>
//         <h2>Namaste React</h2>
//         {/* <User name={"Tarang Upadhyay(function)"}/> */}
//         <UserClass name={"Tarang(Class)"} location={"Dehradun(class)"} />
//       </div>
//     );
//   }
// }

// export default About;



                                             //Tailwind css Improved 

import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="w-full max-w-3xl bg-slate-800/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-slate-700">

          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            About Class Component
          </h1>

          <p className="text-slate-400 text-center mb-8">
            Built using React Class Components & Context API
          </p>

          {/* Logged in user section */}
          <div className="bg-slate-900 rounded-xl p-6 mb-8 flex items-center justify-between border border-slate-700">
            <div>
              <p className="text-sm text-slate-400">Logged In User</p>

              <UserContext.Consumer>
                {({ loggedInUser }) => (
                  <h2 className="text-xl font-semibold text-emerald-400 mt-1">
                    {loggedInUser}
                  </h2>
                )}
              </UserContext.Consumer>
            </div>

            <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
              U
            </div>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-6 items-center">

            {/* Left info */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                Namaste React 👋
              </h2>

              <p className="text-slate-400 leading-relaxed">
                This page demonstrates how class based components work along
                with React Context for sharing global data like the logged in
                user.
              </p>
            </div>

            {/* Right card */}
            <div className="bg-slate-900 rounded-xl p-5 border border-slate-700 shadow-lg">
              <UserClass
                name={"Tarang (Class)"}
                location={"Dehradun (class)"}
              />
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default About;
