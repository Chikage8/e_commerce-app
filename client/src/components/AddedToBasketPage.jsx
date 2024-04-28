import React, { useState, useContext, useEffect } from "react";
import PriceDisplay from "./PriceDisplay";
import Header from "./Header";
import BuyButtons from "./BuyButtons";
import GoToBasketButton from "./GoToBasketButton";
import { ReactComponent as DownArrow } from "../icons/down-arrow.svg";
import { ReactComponent as TrashCan } from "../icons/trash-can.svg";
import SelectQuantityDropDown from "./SelectQuantityDropDown";
import QuantitySelector from "./QuantitySelector";
import { UserContext } from "../App.js"

const AddedToBasketPage = (props) => {
  let productsInBasketIds = [];
  let productsInBasket = [];

  const [user, setUser] = useContext(UserContext);

  console.log("AddedToBasketPage -> user.basket: ", user.basket);

  // Store the Ids of the basket items in an array
  // for (let i = 0; i < localStorage.length; i++) {
  //   console.log("a");
  //   if (
  //     localStorage.key(i).substring(0, 7) == `basket/` &&
  //     localStorage.key(i).split("/")[1] == user.id &&
  //     localStorage.key(i).split("/").length > 2 &&
  //     localStorage.key(i).split("/")[2] !== "undefined"
  //   ) {
  //     console.log("aa");
  //     console.log(parseInt(localStorage.key(i).split("/")[2]));
  //     productsInBasketIds.push(parseInt(localStorage.key(i).split("/")[2]));
  //   }
  // }

  let products = JSON.parse(localStorage.getItem("products"));
  console.log(products);
  // Store the actual products corresponding to Ids in an array
  for (let i = 0; i < productsInBasketIds.length; i++) {
    productsInBasket.push(
      products.find((prod) => prod.id == parseInt(productsInBasketIds[i]))
    );
  }

  // Set the user basket in localStorage
  //   user.user.basket = [];
  //   productsInBasket.forEach((prod) => {
  //     user.user.basket.push(prod);
  //   });

  let recentlyAddedProduct = user.basket[user.basket.length - 1];
  let main_image;
  // let current_price;
  const [current_price, setCurrentPrice] = useState(0)
  useEffect(()=>{
    if (
      recentlyAddedProduct !== null &&
      recentlyAddedProduct !== "undefined" &&
      recentlyAddedProduct !== undefined
    ) {
      console.log("recentlyAddedProduct: ", recentlyAddedProduct);
      // adjusting added to basket page pricing
      main_image = recentlyAddedProduct.main_image;
      setCurrentPrice((
        recentlyAddedProduct.list_price *
        (1 - recentlyAddedProduct.discount_percentage / 100)
      ).toFixed(2));

      // altering user basket
      // for ( let i = 0; i < user.basket.length; i++ ) {
      //   if(user.basket[i].id === recentlyAddedProduct.id) {
      //     user.basket[i].quantity = parseInt(user.basket[i].quantity) + 1
      //     sessionStorage.setItem("user", JSON.stringify(user))
      //     setUser(user)
      //     break
      //   }
      // }
    }
  },[])

  const [selectQuantity, setSelectQuantity] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div id="added-to-basket-page-container">
      <div id="added-to-basket-narrowed-page">
        <Header addedPage={true} />
        <div id="added-to-basket-narrowed-page-cols">
          <div id="added-to-basket-narrowed-page-left-col">
            <img src={main_image} alt="" />
            <h3>Added To Cart</h3>
          </div>
          <div id="added-to-basket-narrowed-page-right-col">
            <div>
              Card Subtotal: <PriceDisplay price={current_price} />{" "}
            </div>
            <div>Proceed to checkout</div>
            <div>Go to Basket</div>
          </div>
        </div>
      </div>
      <div id="added-to-basket-new-right-col">
        <p id="added-to-basket-new-right-col-subtotal-text">Subtotal</p>
        <h4
          id="added-to-basket-new-right-col-current-price"
          className="classic-price-display dark-orange"
        >
          ${current_price * quantity}
        </h4>
        <GoToBasketButton />
        <div className="horizontal-line top-margin"></div>
        <div id="added-to-basket-new-right-col-img-container">
          <img src={main_image} alt="" />
        </div>
        <h4
          id="added-to-basket-new-right-col-current-price"
          className="classic-price-display black top-margin bot-margin"
        >
          ${current_price * quantity}
        </h4>
        <QuantitySelector
          product={recentlyAddedProduct}
          selectQuantity={selectQuantity}
          setSelectQuantity={setSelectQuantity}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <div className="horizontal-line top-margin"></div>
      </div>
    </div>
  );
};

export default AddedToBasketPage;
