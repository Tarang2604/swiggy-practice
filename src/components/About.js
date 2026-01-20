import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


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
                <h2>Namaste React</h2>
        {/* <User name={"Tarang Upadhyay(function)"}/> */}
        <UserClass name ={"Tarang(Class)"}location={"Dehradun(class)"}/>
    </div>
        );
    };
};

export default About;