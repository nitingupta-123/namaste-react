import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_SEARCH_API } from "../utils/constants";


const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_SEARCH_API);

    const json = await data.json();
    const dataCard = json.data.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
    // Optional Chaining
    setListOfRestraunt(dataCard);
    console.log("dataCard",dataCard);
    setFilteredRestaurant(dataCard);
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-4">
      <div className="filter flex flex-wrap gap-4 mb-6 items-center">
        <div className="search flex gap-2">
          <input
            type="text"
            className="search-box px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              // console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors cursor-pointer font-semibold"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => {
                return res.card.card.info.avgRating > 4.5
              }
            );
            setFilteredRestaurant(filteredList);


          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap gap-4 justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.card.card.info.id}
          to={`/restaurant/${restaurant.card.card.info.id}`}>
            {restaurant?.card?.card?.info?.promoted?(
              <PromotedRestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
            ):(
              <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
