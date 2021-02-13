import React from "react";
import games from "../mocks/games.json";
import OfferCard from "../OfferCard/OfferCard";
import { Wrapper } from "./OfferList.style";

const OfferList = () => {
    
  return <Wrapper>
      {games.products.map(game => (
          <OfferCard 
            name={game.name}
            developer={game.company}
            oldPrice={game.oldPrice}
            newPrice={game.newPrice}
            urlImg={game.url}
          />
      ))}
  </Wrapper>;
};

export default OfferList;
