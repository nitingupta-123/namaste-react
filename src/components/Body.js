import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.9690247&lng=72.8205292&str=mumbai&trackingId=undefined&submitAction=ENTER&queryUniqueId=0337bbe6-d2e9-acee-b486-cc1d2564c72e&selectedPLTab=RESTAURANT"
    );

    const json = await data.json();
    const dataCard = json.data.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
    // Optional Chaining
    setListOfRestraunt(dataCard);
    setFilteredRestaurant(dataCard);
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
