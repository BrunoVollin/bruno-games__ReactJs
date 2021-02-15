import React from "react";
import { Wrapper } from "./PriceCart.style";

const PriceCard = ({ selectedGames }) => {
  const total = selectedGames.reduce((total, item) => total + item.newPrice, 0);
  return (
    <Wrapper>
      <h2>total</h2>
      <h2>
        {total.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </h2>
    </Wrapper>
  );
};

export default PriceCard;
