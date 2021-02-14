import React from "react";
import percent from "../../utils/percent";
import { Bottom, Wrapper } from "./OfferCard.style";

const OfferCard = ({ name, developer, oldPrice, newPrice, urlImg, onClick, value }) => {
  console.log(value);
  return (
    <Wrapper urlImg={urlImg} onClick={onClick} value={value}>
      <h1>{name}</h1>
      <h2>{developer}</h2>
      <p className="old-price">
        {oldPrice.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
        {/* R${oldPrice} */}
      </p>
      <Bottom>
        <p className="new-Price">
          {newPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
          {/* R${newPrice} */}
        </p>
        <p className="percentage-off">-{percent(newPrice, oldPrice)}%
        </p>
      </Bottom>
    </Wrapper>
  );
};

export default OfferCard;
