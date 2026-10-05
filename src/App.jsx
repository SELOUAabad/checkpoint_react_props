import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-5 text-center">
      <h1>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
