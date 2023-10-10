import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import CartImage from "../utils/CartImage.png";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

  return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div>
            <button className="p-2 m-2 bg-blue-500 rounded-lg mb-18 text-white" 
            onClick={handleClearCart} >Clear Cart</button>
            
            { cartItems.length === 0 && <div><h1>Cart is empty Add Items to the cart</h1> 
            <img className="m-auto" src={CartImage} alt="" /></div>}
            <ItemList items={cartItems} />
        </div>
    </div>
  )
}

export default Cart;