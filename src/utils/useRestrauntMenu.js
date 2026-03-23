import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "./constants";

export const useRestrauntMenu = (resId) =>{
    // alert(resId);
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu(resId);
    },[resId])

    const fetchMenu = async(resId)=>{
        const data = await fetch( 
            `${RESTAURANT_MENU_API}${resId}`
        );
        console.log("data",data);
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}