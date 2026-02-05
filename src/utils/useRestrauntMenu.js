import { useState, useEffect } from "react";

export const useRestrauntMenu = (resId) =>{
    // alert(resId);
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu(resId);
    },[resId])

    const fetchMenu = async(resId)=>{
        const data = await fetch( 
            `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId=${resId}`
        );
        console.log("data",data);
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}