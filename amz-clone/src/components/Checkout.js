import React from "react";
// import FlipMove from "react-flip-move";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* <FlipMove> */}
          {basket.map((item, i) => (
            <CheckoutProduct
              key={`${item.id}${i}`}
              id={item.id}
              price={item.price}
              rating={item.rating}
              title={item.title}
              image={item.image}
            />
          ))}
          {/* </FlipMove> */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
