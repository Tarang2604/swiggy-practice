import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            UserInfo:{
                name:"Dummy",
                location:"Default"
            },
        };
        console.log(" Child Constructor");
        
    }

    async componentDidMount(){
        console.log("Child ComponentDidMount");
        // Api call
        const data = await fetch ("https://api.github.com/users/Tarang2604");
        const json = await data.json();

        this.setState({
            UserInfo:json,
        });
        console.log(json);
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate")
    }
    render(){
       console.log(" child Render");
       
       const{name,location,avatar_url}= this.state.UserInfo
        return(
        <div className="user-card">
            <img src={avatar_url}></img>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact:tarangupadhyay26@gmail.com </h4>
        </div>
    );
    }
}
export default UserClass;