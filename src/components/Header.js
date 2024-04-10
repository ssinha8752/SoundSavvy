import {Link, NavLink} from 'react-router-dom';
import { logo } from '../assets';
import { useSelector } from 'react-redux'; 
import "./Header.css";
import { useCart } from '../context/CartContext';

export const Header = () => {

  const headphonesData=useSelector(state => state.cartState.cartList)


  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Shopmate Logo" />
        <span>SoundSavvy - Redux</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {headphonesData.length}</span>

      </Link>
    </header>
  )
}