import React from "react";
import "./product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //TODO - extract actions
    dispatch({
      type: "ADD_TO_BASKET",
      payload: { item: { id, title, image, price, rating } },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image}></img>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
