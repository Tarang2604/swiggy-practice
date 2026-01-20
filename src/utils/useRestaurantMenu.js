import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId)=> {
    const[resInfo, setResInfo]= useState(null);
    

    const fetchData = async()=>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    };
    useEffect(()=>{
        fetchData();
    },[resId]);

    return resInfo;

}
export default useRestaurantMenu; 