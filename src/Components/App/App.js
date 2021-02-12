import React from "react";
import OfferCard from "../OfferCard/OfferCard";

const App = () => {
  return (
    <div>
      <OfferCard
        name="CyberPunk 2077"
        developer="CD PROJECT RED"
        oldPrice={10}
        newPrice={5}
        urlImg="https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png"
      />
    </div>
  );
};

export default App;
