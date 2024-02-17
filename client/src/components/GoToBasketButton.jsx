import React from "react";
import { useNavigate } from "react-router-dom";

const GoToBasketButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/basket");
  };

  return (
    <div id="go-to-basket-button-container">
      <button id="go-to-basket-button" onClick={handleClick}>
        Go To Basket
      </button>
    </div>
  );
};

export default GoToBasketButton;
