import React, { useState, useContext, useEffect } from "react";
import PriceDisplay from "./PriceDisplay";
import Header from "./Header";
import BuyButtons from "./BuyButtons";
import GoToBasketButton from "./GoToBasketButton";
import { ReactComponent as DownArrow } from "../icons/down-arrow.svg";
import { ReactComponent as TrashCan } from "../icons/trash-can.svg";
import SelectQuantityDropDown from "./SelectQuantityDropDown";
import QuantitySelector from "./QuantitySelector";
import { UserContext, TotalItemsInBasket, TotalPrice } from "../App.js"

const AddedToBasketPage = (props) => {
  let productsInBasketIds = [];
  let productsInBasket = [];

  const [user, setUser] = useContext(UserContext);
  const [totalItemsInBasket, setTotalItemsInBasket] = useContext(TotalItemsInBasket);
  const [totalPrice, setTotalPrice] = useContext(TotalPrice);

  let recentlyAddedProduct = user.basket[user.basket.length - 1];
  console.log(recentlyAddedProduct.current_price)
  const [itemTotalPrice, setItemTotalPrice] = useState(parseInt(recentlyAddedProduct.current_price * recentlyAddedProduct.quantity))
  const itemTotalPriceCopy = itemTotalPrice;

  useEffect(()=>{
    console.log("shopingbasketpagecontent useEffect")
    if (user && user.basket) {
      setTotalItemsInBasket(0)
      setTotalPrice(0)
      for (let i = 0; i < user.basket.length ; i++) {
        console.log("################### Subtotal is being adjusted by adding the item with id: ", user.basket[i].id, " quantity: ", user.basket[i].quantity);
        setTotalItemsInBasket(value => value + user.basket[i].quantity)
        setTotalPrice(value => value + user.basket[i].quantity * user.basket[i].current_price)
        // totalItemsInBasketCopy += parseInt(user.basket[i].quantity);
        // console.log("################### totalItemsInBasketCopy: ", totalItemsInBasketCopy);
      }
    }
    // forceUpdate();
  }, [user] )

  console.log("AddedToBasketPage -> user.basket: ", user.basket);


  let products = JSON.parse(localStorage.getItem("products"));
  console.log(products);
  // Store the actual products corresponding to Ids in an array
  for (let i = 0; i < productsInBasketIds.length; i++) {
    productsInBasket.push(
      products.find((prod) => prod.id == parseInt(productsInBasketIds[i]))
    );
  }

  let main_image;
  
  useEffect(()=>{
    if (
      recentlyAddedProduct !== null &&
      recentlyAddedProduct !== "undefined" &&
      recentlyAddedProduct !== undefined
    ) {
      console.log("recentlyAddedProduct: ", recentlyAddedProduct);
      // adjusting added to basket page pricing
      main_image = recentlyAddedProduct.main_image;
      // setItemTotalPrice((
      //   recentlyAddedProduct.list_price *
      //   (1 - recentlyAddedProduct.discount_percentage / 100)
      // ).toFixed(2));
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
              Card Subtotal: <PriceDisplay price={parseFloat(totalPrice.toFixed(2))} />{" "}
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
          ${parseFloat(totalPrice.toFixed(2))}
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
          ${itemTotalPrice}
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
