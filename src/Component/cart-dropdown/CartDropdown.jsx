import "./CartDropdown.styles.scss";

import React from "react";
import Button from "../button/button";
import CartItem from "../cart-items/CartItem";
import { useContext } from "react";
import { CartContext } from "../../Context/CartItem-context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
