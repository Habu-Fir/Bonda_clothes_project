import React from "react";
import { useContext } from "react";
import ProductCard from "../../Component/ProductCard/ProductCard";
import { ProductsContext } from "../../Context/products-context";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((products) => (
        <div key={products.id}>
          <ProductCard products={products} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
