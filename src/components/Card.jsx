import { IMG_CDN } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating } = resData?.info; 


  return (
    <div id="Res-Container">
      <img className="card_image" src={IMG_CDN + cloudinaryImageId} alt="dish" />
      <div className="p-3">
        <div className="hotel_name_box py-1 ">
          <h4 className="font-semibold text-[1.1rem] text-gray-700">{name}</h4>
        </div>
        <h4>⭐ {avgRating}</h4>
        <div className="cuisine_box py-[0]">
          <h4>{cuisines.join(", ")}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
