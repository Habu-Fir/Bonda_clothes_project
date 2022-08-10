import "./ProductCard.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/CartItem-context";
import React from "react";
import Button from "../button/button";

const ProductCard = ({ products }) => {
  const { name, price, imageUrl } = products;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(products);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name} </span>
        <span className="price">{price}</span>
      </div>

      <Button buttonType="inverted" onClick={addProductToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
