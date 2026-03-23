import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestrauntMenu } from "../utils/useRestrauntMenu";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";


export const RestaurantMenu = () =>{

    const {resId} = useParams();

    const resInfo = useRestrauntMenu(resId);

    const [activeIndex, setActiveIndex] = useState(null);

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


    const {name, cuisines, costForTwoMessage, avgRating, totalRatingsString} = resInfo?.cards[2]?.card?.card?.info || {};
    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card)=>card?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="menu p-4 md:p-8 max-w-5xl mx-auto bg-gradient-to-b from-gray-50 to-white min-h-screen">
            {/* Restaurant Header Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">{name}</h1>
                        <p className="text-base md:text-lg text-gray-600 mb-3">{cuisines?.join(", ")}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            {avgRating && (
                                <span className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                                    <span className="text-yellow-500 text-lg">⭐</span>
                                    <span className="font-bold text-gray-900">{avgRating}</span>
                                    <span className="text-gray-600">({totalRatingsString})</span>
                                </span>
                            )}
                            <span className="text-gray-600 bg-gray-50 px-3 py-1 rounded-full">{costForTwoMessage}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Menu Section */}
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-1 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Menu</h2>
                </div>
                
                <div>
                    {categories?.map((category,index)=>{
                        const {itemCards,title} = category?.card?.card;
                        return (
                            <RestaurantCategory key={title} title={title} itemCards={itemCards} showItem={index===activeIndex} 
                            setActiveIndex2={()=>setActiveIndex(index===activeIndex ? null : index)}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

