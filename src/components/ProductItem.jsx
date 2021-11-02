import React, { useContext } from "react";
import "@styles/ProductItem.scss";
import bt_add_to_cart from "@icons/bt_add_to_cart.svg";
import bt_added_to_cart from "@icons/bt_added_to_cart.svg";
import AppContext from "@context/AppContext";

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
    console.log(`state.cart.includes ` + state.cart.includes(item));
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          {state.cart.includes(product) ? (
            <img src={bt_added_to_cart} alt="added_to_cart" />
          ) : (
            <img src={bt_add_to_cart} alt="add_to_cart" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
