import React from "react";
import OfferCard from "../OfferCard/OfferCard";
import { Wrapper, MapOffers, Title } from "./OfferList.style";

const OfferList = ({ title, games, onToggle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <MapOffers>
      {games.map((game) => (
        <OfferCard
          name={game.name}
          developer={game.company}
          oldPrice={game.oldPrice}
          newPrice={game.newPrice}
          urlImg={game.url}
          onClick={() => onToggle(game.id)}
          value={game.checked}
        />
      ))}
      </ MapOffers>
    </Wrapper>
  );
};

export default OfferList;
