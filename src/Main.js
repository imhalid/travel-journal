import "./Main.css";
import React from "react";
import Card from "./Card";
import data from "./data.json";

function Main() {
  const cardata = data.map((value) => {
    return (
      <Card
        name={value.name}
        date={value.date}
        desc={value.desc}
        location={value.location.toUpperCase()}
        content={value.content}
        map={value.map}

        //could only be written in "{...value}" but then "toUpperCase" doesn't work.
      />
    );
  });
  return <div className="main-bg">{cardata}</div>;
}

export default Main;
