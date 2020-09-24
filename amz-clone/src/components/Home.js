import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB406828669_.jpg"
        />
        <div className="home__row">
          <Product
            id="123123123"
            title="The lean startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="123456789"
            title="Kenwood kMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whist, 5 Litre Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="321321321"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="555444333"
            title="Amazon Echo (3rd Gen) | Smart speaker with Alexa - Charcoal fabric"
            price={98.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="999888777"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Gen)"
            price={589.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81WhK5%2Bgf2L._AC_SL1500_.jpg"
            rating={1}
          />
        </div>
        <div className="home__row">
          <Product
            id="321321321"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
