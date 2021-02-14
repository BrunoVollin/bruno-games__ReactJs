import React from "react";
import { Wrapper } from "./CardShopping.style";

const CartShopping = ({selectedGames}) => {
  return (
    <Wrapper>
      <h1>Shopping Cart</h1>
      {selectedGames.map((game) => 
        <h2>{game.name}</h2>
      )}
    </Wrapper>
  );
};

export default CartShopping;
