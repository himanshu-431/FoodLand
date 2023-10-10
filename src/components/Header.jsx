import Swiggy from "../utils/Swiggy.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="Header">
      <div className="navbar">
        <div id="logo">
          <img className="w-54"  src={Swiggy} alt="swiggy" />
        </div>
        <div className="menu-items"><Link to='/'>Home</Link></div>
        <div className="menu-items"><Link to='/about'>About</Link></div>
        <div className="menu-items"><Link to='/contact'>Contact Us</Link></div>
        <div className="menu-items"><Link to='/cart'> Cart-{cartItems.length} </Link></div>
      </div>
    </div>
  );
};

export default Header;
