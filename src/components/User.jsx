import { useState ,useEffect } from "react";
const User =({name})=>{
    const[count]= useState(0);
    const[count2] = useState(1)

    useEffect(()=>{

    },[]);

    return(
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h2>count2:{count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location:indore</h3>
            <h4>Contact:tarangupadhyay26@gmail.com </h4>
        </div>
    );
};
export default  User;