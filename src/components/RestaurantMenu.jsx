import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [showIndex, setShowIndex] = useState(null);

    const {resId} = useParams();
    //  console.log(resId);


    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch( MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json);

        setResInfo(json.data);

    }

    if (resInfo === null) return (
        <Shimmer />
      ) 

    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    // console.log(name);

      // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);

  return (
    <div className="ResMenu">
        <h1>{name}</h1>
        <h4>{cuisines.join(', ')} - {costForTwoMessage}</h4>
        <br />
              { categories.map((category, index) => <RestaurantCategory 
              // {/* Categories Accordians*/}
              key={category?.card?.card?.title}
              data={category?.card?.card} 
              showItems={index === showIndex ? true : false}
              setIndex={() => setShowIndex(index)}
            /> 
          )}
    </div>
  )
}

export default RestaurantMenu;