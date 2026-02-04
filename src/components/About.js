import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor")
        // console.log("Parent2 constructor")
    }
    componentDidMount(){
        // console.log("Parent ComponentDidMount");
    }
    
 
    
    render(){
        // console.log("Parent Render")
        return(
            <div>
                <h1>About Class Component</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-xl  font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>Namaste React</h2>
        {/* <User name={"Tarang Upadhyay(function)"}/> */}
        <UserClass name ={"Tarang(Class)"}location={"Dehradun(class)"}/>
    </div>
        );
    };
};

export default About;