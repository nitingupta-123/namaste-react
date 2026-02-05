import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestrauntMenu } from "../utils/useRestrauntMenu";
import { useOnlineStatus } from "../utils/useOnlineStatus";


export const RestaurantMenu = () =>{

    const {resId} = useParams();

    const resInfo = useRestrauntMenu(resId);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false){
        return (
            <>
                <h1>❌ Offline</h1>
                <h2>Please check your internet connection</h2>
            </>
        )
    }

    if(resInfo==null){
        return (
            <Shimmer/>
        )
    }


    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log("itemCards",itemCards);


    return (

        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h2>Menu</h2>
            {itemCards?.map((item)=>{
                const {name,description,defaultPrice,sla,id,price} = item?.card?.info;
                return (
                    <ul key={id}>
                        <li>{name} - ₹{defaultPrice / 100 || price / 100}</li>   
                    </ul>
                );
            })
            }
        </div>
    
    );
};

