import React, { useState } from "react";
import CartShopping from "../CartShopping/CartShopping";
import OfferList from "../OfferList/OfferList";
import { Wrapper } from "./App.style";
import products from "../mocks/games.json";


const App = () => {
  const [games, setGames] = useState(products.products)

  function handleToggle(id) {
    console.log(games);
    const newGames = games.map(game => 
      game.id === id ? { ...game, checked: !game.checked } : game
    )
    setGames(newGames);
  }

  return (
    <Wrapper>
      <OfferList title="Offers List" games={games} onToggle={handleToggle} />
      <CartShopping />
    </ Wrapper>
  );
};

export default App;
