import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "../context/AppContext";
import "@styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";

const MyOrder = () => {
  const { state, stateOfAside } = useContext(AppContext);

  const summaryCost = () => {
    const reducer = (accumulator, curr) => accumulator + curr.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  if (state.aside) {
    return (
      <aside className="MyOrder">
        <div className="title-container" onClick={() => stateOfAside(false)}>
          <img src={arrow} alt="arrow" />
          <p className="title">My order</p>
        </div>
        <div className="my-order-content">
          {state.cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
          
          
        </div>
        <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>${summaryCost()}</p>
          </div>
        <button className="primary-button">Checkout</button>
      </aside>
    );
  } else {
    return <></>;
  }
};

export default MyOrder;
