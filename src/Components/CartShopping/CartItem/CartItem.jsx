import React from "react";
import { CartImage, CartInfos, Name, Prices, Wrapper } from "./CartItem.style";

const CartItem = ({ name, company, urlImg, newPrice, oldPrice }) => {
  return (
    <Wrapper>
      <CartImage urlImg={urlImg} />
      <CartInfos>
        <Name>
          <h2>{name}</h2>
          <h3>{company}</h3>
        </Name>
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
          <h4>Quantity 1</h4>
        </Prices>
      </CartInfos>
    </Wrapper>
  );
};

export default CartItem;
