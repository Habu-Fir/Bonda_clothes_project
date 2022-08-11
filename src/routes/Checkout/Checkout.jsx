import "./checkout.styles.scss";
import { CartContext } from "../../Context/CartItem-context";
import React, { useContext } from "react";
import CheckoutItem from "../../Component/checkout-item/CheckoutItem";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Discription</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="Total">Total:${cartTotal}</span>
    </div>
  );
};

export default Checkout;
