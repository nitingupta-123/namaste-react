import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.card.card.info;

  return (
    <div className="res-card m-2 p-3 w-64 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-transparent hover:border-gray-300">
      <img
        className="res-logo w-full h-40 object-cover rounded-lg mb-3"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg mb-1 truncate">{name}</h3>
      <h4 className="text-sm text-gray-600 mb-1 truncate">{cuisines.join(", ")}</h4>
      <h4 className="text-sm font-semibold mb-1">⭐ {avgRating} stars</h4>
      <h4 className="text-sm text-gray-700 mb-1">₹{costForTwo / 100} FOR TWO</h4>
      <h4 className="text-sm text-gray-600">{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
