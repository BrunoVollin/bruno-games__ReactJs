import React from "react";
import { Map, Wrapper } from "./ShoppingCart.style";
import CardItem from "./CartItem/CartItem";

const ShoppingCart = ({ selectedGames }) => {
  return (
    <Wrapper>
      <h1>Shopping Cart</h1>
      <Map>
        {selectedGames.map((game) => (
          <CardItem
            name={game.name}
            urlImg={game.url}
            newPrice={game.newPrice}
            oldPrice={game.oldPrice}
            company={game.company}
          />
        ))}
      </Map>
    </Wrapper>
  );
};

export default ShoppingCart;
