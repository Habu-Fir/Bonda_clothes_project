import "./CartIcon.styles.scss";
import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../Context/CartItem-context";

import React from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleCartClicked = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCartClicked}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
