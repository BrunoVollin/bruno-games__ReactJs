import React from "react";
import { CartImage, CartInfos, Prices, Wrapper } from "./CartItem.style";

const CartItem = ({ name, urlImg, newPrice, oldPrice }) => {
  return (
    <Wrapper>
      <CartImage urlImg={urlImg} />
      <CartInfos>
        <h2>{name}</h2>
        <Prices>
        <h2 className="old-price">
            {oldPrice.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h2>
          <h2 className="new-price">
            {newPrice.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h2>
          
        </Prices>
      </CartInfos>
    </Wrapper>
  );
};

export default CartItem;
