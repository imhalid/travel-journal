import "./Card.css";
import React from "react";
import { MdLocationOn } from "react-icons/md";
// import data from "./data.json";

function Card(props) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img className="data-image" src={`${props.content}`} alt="" />
      </div>
      <div className="card-text-container">
        <div className="card-location-text">
          <MdLocationOn className="card-local-icon" />
          <p className="card-location-city">{props.location}</p>
          <a href={`${props.map}`} className="card-location-link">
            {" "}
            View on Google Maps{""}
          </a>
        </div>
        <div className="card-info">
          <h1 className="card-city-name">{props.name}</h1>
          <h6 className="card-date">{props.date}</h6>
          <p className="card-desc">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

/* 

*/
