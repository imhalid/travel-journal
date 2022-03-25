import "./App.css";
import Main from "./Main";
import React from "react";
import { GlobeIcon } from "@heroicons/react/solid";
function App() {
  return (
    <div>
      <nav className="navbar">
        <GlobeIcon className="globeicon" />
        <h1 className="nav-title">my travel journal.</h1>
      </nav>
      <Main />
    </div>
  );
}

export default App;
