import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCategory = ({title, itemCards, showItem, setActiveIndex2}) => {

    const handleClick = () => {
        setActiveIndex2();
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-4 overflow-hidden transition-all duration-300 hover:shadow-xl">
            <button
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-orange-50 to-yellow-50 hover:from-orange-100 hover:to-yellow-100 transition-all duration-200"
                onClick={handleClick}
            >
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <div className="flex items-center gap-2">
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 font-medium">
                        {itemCards?.length || 0} items
                    </span>
                    <span className="text-gray-600 text-lg">{showItem ? "▲" : "▼"}</span>
                </div>
            </button>
            
            {showItem && (
                <div className="px-6 py-4 space-y-4">
                    {itemCards?.map((item)=>{
                        const {name, description, defaultPrice, id, price, imageId} = item?.card?.info || {};
                        const itemPrice = defaultPrice ? defaultPrice / 100 : (price ? price / 100 : 0);
                        const itemImage = imageId ? CDN_URL + imageId : null;
                        
                        return ( 
                            <div 
                                key={id} 
                                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 bg-white hover:border-orange-300"
                            >
                                <div className="flex gap-4">
                                    {/* Item Image */}
                                    <div className="relative flex-shrink-0">
                                        {itemImage ? (
                                            <img 
                                                src={itemImage} 
                                                alt={name}
                                                className="w-32 h-32 object-cover rounded-lg"
                                            />
                                        ) : (
                                            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                                                <span className="text-gray-400 text-xs">No Image</span>
                                            </div>
                                        )}
                                        {/* Add Button on top of image */}
                                        <button 
                                            className="absolute -top-2 -right-2 bg-black hover:bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 font-bold text-lg"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // Add to cart functionality can be added here
                                                console.log("Added to cart:", name);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                    
                                    {/* Item Details */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-1">{name}</h4>
                                            {description && (
                                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between mt-3">
                                            <span className="text-lg font-bold text-gray-900">
                                                ₹{itemPrice}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    )
}

export default RestaurantCategory;