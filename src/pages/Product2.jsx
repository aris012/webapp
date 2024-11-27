import React from "react";
import "../style/product2.css";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.png";

const Product2 = () => {
  return (
    <div className="product">
      <div className="product-content-1">
        <div>
          <h1>Scentiments.MNL</h1>
        </div>
        <div className="product-content-1-paragraph">
          <p>
          Make your gift truly unforgettable with out Personalized Message Candle. Whether you’re celebrating a special occasion or sharing heartfelt words, this candle lets you add a custom message that makes it uniquely yours. Perfect for birthdays, anniversaries, weddings, or simply to say “thank you” or “I love you”.
          </p>
        </div>
      </div>
      <div className="product-content-2">
        <h1>Personalized Message Candle </h1>

        <div className="product-content-2-container">
          <div className="container">
            <div>
              <img src={product12} />
            </div>
          </div>
          <div className="container">
            <div>
              <img src={product13} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product2;
