import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT);
   
    const json = await data.json();
    
    setListOfRestraunt(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

  return (listOfRestaurants?.length===0) ? (<Shimmer/>):
  (
      <div className="Body">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div id="Cards-Container">
          {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={/restaurants/ + restaurant.info.id}><Card resData={restaurant} /></Link>
          ))}
        </div>
      </div>
  );
};

export default Body;
