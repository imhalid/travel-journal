import "./Card.css";
import React from "react";
import { MdLocationOn } from "react-icons/md";

function App() {
  return (
    <div className="card-container">
      <img
        className="card-image"
        src="https://images.unsplash.com/photo-1648116032378-8bba8ec78081?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />
      <div className="card-text-container">
        <div className="card-location-text">
          <MdLocationOn className="card-local-icon" />
          <p className="card-location-city">JAPAN</p>
          <a
            href="https://unsplash.com/photos/_YvxgzL4UNM"
            className="card-location-link"
          >
            {" "}
            View on Google Maps{""}
          </a>
        </div>
        <div className="card-info">
          <h1 className="card-city-name">Mount Fuji</h1>
          <h6 className="card-date">12 Jan, 2021 - 24 Jan, 2021</h6>
          <p className="card-desc">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
