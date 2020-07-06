import React from "react";
import "./card.style.css";
export const Card = props => (
  <div className="card-container">
    <img
      alt="profile"
      src={`https://robohash.org/${props.profile.id}?set=set2&size=180x180`}
    />
    <h1> {props.profile.name}</h1>
    <p>{props.profile.email}</p>
  </div>
);
