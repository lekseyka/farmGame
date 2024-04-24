import React from 'react';
import './style.module.scss';
import GameWrapper from "./components/gameWrapper/GameWrapper";
import Header from "./components/header/Header";
import ChestsSection from "./components/chestsSection/ChestsSection";
import InventorySection from "./components/inventorySection/InventorySection";

function App() {
  return (
    <div className="App">
        <GameWrapper>

            <Header />

            <ChestsSection />

            <InventorySection />

        </GameWrapper>
    </div>
  );
}

export default App;
