import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    user && auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__link" onClick={handleAuthentication}>
            <span className="header__linkLineOne">
              {user?.email ? `Hello ${user.email}` : "Hello Guest"}
            </span>
            <span className="header__linkLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header__link">
          <span className="header__linkLineOne">Returns</span>
          <span className="header__linkLineTwo">& Orders</span>
        </div>
        <div className="header__link">
          <span className="header__linkLineOne">Your</span>
          <span className="header__linkLineTwo">Prime</span>
        </div>
        <div className="header__linkBasket">
          <Link to="/checkout">
            <ShoppingBasketIcon className="header__basketIcon" />
          </Link>
          <span className="header__linkLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
