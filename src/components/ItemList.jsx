import { useDispatch } from "react-redux";
import {IMG_CDN} from "../utils/constants";
import {addItem} from "../utils/cartSlice";

const ItemList = ({items}) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
        
        {items.map((item) => (
        <div key={item.card.info.id} className="menu_content">
            
            <div>
            <div>
                <br />
                <span>{item.card.info.name}</span>
                <span> - ₹ {item.card.info.price/100}</span>
            </div>
            <p>{item.card.info.description}</p>
            </div>
 
            <div>
            <img src={IMG_CDN + item.card.info.imageId} className="cat_img" alt="dishes" />
            <button className="add_btn"
              onClick={() => handleAddItem(item) } >
              Add +
            </button>
            </div>
        </div>
       ))}
    </div>
  )
}

export default ItemList;