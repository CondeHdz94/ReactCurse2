import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import icon_menu from "@icons/icon_menu.svg";
import logo_yard_sale from "@logos/logo_yard_sale.svg";
import icon_shopping_cart from "@icons/icon_shopping_cart.svg";

import Menu from "@components/Menu";
import MobileMenu from "@components/MobileMenu";
import AppContext from "@context/AppContext";
import MyOrder from "../Containers/MyOrder";

const Header = () => {
  const [toogle, setToogle] = useState(false);
  const [toogleMobile, setToogleMobile] = useState(false);
  const [toogleOrders, setTootgleOrders] = useState(false);
  const { state, stateOfAside, stateOfMobileMenu } = useContext(AppContext);

  const handleClick = () => {
    setToogle(!toogle);
  };

  const handleToogleCart = () => {
    //setTootgleOrders(!toogleOrders);
    stateOfAside(!state.aside);
  };

  const handleStateMobileMenu = () => {
    stateOfMobileMenu(!state.mobile_menu);
  };

  return (
    <nav>
      <img
        src={icon_menu}
        alt="menu"
        className="menu"
        onClick={() => handleStateMobileMenu()}
      />

      <div className="navbar-left">
        <img src={logo_yard_sale} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="" onClick={(e) => e.preventDefault()}>
              All
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Clothes
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Electronics
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Furnitures
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Toys
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Others
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleClick}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => handleToogleCart()}
          >
            <img src={icon_shopping_cart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toogle && <Menu />}
      {state.aside && <MyOrder />}
      {state.mobile_menu && <MobileMenu />}
    </nav>
  );
};

export default Header;
