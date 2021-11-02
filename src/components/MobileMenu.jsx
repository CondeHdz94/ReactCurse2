import React, { useContext } from "react";
import "@styles/MobileMenu.scss"
import icon_close from "@icons/icon_close.png"
import AppContext from "@context/AppContext";

export const MobileMenu = () => {
    const { state, stateOfMobileMenu } = useContext(AppContext);
    const handleStateMobileMenu = () => {
        stateOfMobileMenu(!state.mobile_menu);
    }
  return (
    <div className="mobile-menu">
        <img src={icon_close} alt="" onClick={() => handleStateMobileMenu()}/>
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/" className="email">
            platzi@example.com
          </a>
        </li>
        <li>
          <a href="/" className="sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
