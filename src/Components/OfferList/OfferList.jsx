import React from "react";
import OfferCard from "../OfferCard/OfferCard";
import { Wrapper, MapOffers } from "./OfferList.style";

const OfferList = ({ title, games, onToggle }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
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
      </MapOffers>
    </Wrapper>
  );
};

export default OfferList;
