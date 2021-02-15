import React, { useEffect, useState } from "react";
import CartShopping from "../CartShopping/ShoppingCart";
import OfferList from "../OfferList/OfferList";
import { Wrapper } from "./App.style";
import products from "../../mocks/games.json";
import AppContainer from "../AppContainer/AppContainer";


const App = () => {
  const [games, setGames] = useState(products.products)
  const [selectedGames, setSelectedGames] = useState([]);

  useEffect(() => {
    const newSelectedGames = games.filter(game => game.checked);

    setSelectedGames(newSelectedGames);
  }, [games])

  function handleToggle(id) {
    const newGames = games.map(game =>
      game.id === id ? { ...game, checked: !game.checked } : game
    )
    setGames(newGames);
  }

  return (
    <AppContainer
      left={<OfferList title="Offers List" games={games} onToggle={handleToggle} />}
      right={<CartShopping selectedGames={selectedGames} />}
    />
  );
};

export default App;
