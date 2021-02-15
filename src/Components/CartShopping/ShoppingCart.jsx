import React from "react";
import { Wrapper } from "./ShoppingCart.style";
import CardItem from "./CartItem/CartItem";

const ShoppingCart = ({ selectedGames }) => {
  return (
    <Wrapper>
      <h1>Shopping Cart</h1>
      {selectedGames.map((game) => (
        <CardItem name={game.name} urlImg={game.url} newPrice={game.newPrice}  oldPrice={game.oldPrice} />
      ))}
    </Wrapper>
  );
};

export default ShoppingCart;
