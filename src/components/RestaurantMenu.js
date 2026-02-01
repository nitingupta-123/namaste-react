import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

export const RestaurantMenu = () =>{

    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
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

