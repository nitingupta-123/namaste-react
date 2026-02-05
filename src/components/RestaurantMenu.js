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
            <div className="p-8 text-center">
                <h1 className="text-4xl font-bold mb-4 text-red-600">❌ Offline</h1>
                <h2 className="text-2xl text-gray-600">Please check your internet connection</h2>
            </div>
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

        <div className="menu p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 text-gray-800">{name}</h1>
            <p className="text-lg text-gray-600 mb-4">{cuisines.join(", ")}</p>
            <p className="text-base text-gray-500 mb-6">{costForTwoMessage}</p>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Menu</h2>
            <div className="space-y-3">
                {itemCards?.map((item)=>{
                    const {name,description,defaultPrice,sla,id,price} = item?.card?.info;
                    return (
                        <div key={id} className="border-b border-gray-200 pb-3">
                            <li className="list-none text-lg font-medium text-gray-800">{name} - ₹{defaultPrice / 100 || price / 100}</li>
                            {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
                        </div>
                    );
                })
                }
            </div>
        </div>
    
    );
};

