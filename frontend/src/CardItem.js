import React from "react";
import "./CardItem.css";

const CardItem = ({ name, description, logo_url }) => {
  return (
    <div className="CardItem card">
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between mb-4">
          <span className="text-capitalize">{name}</span>
          {logo_url ? (
            <img src={logo_url} alt={`${name}} Logo`} />
          ) : (
            <i className="far fa-building"></i>
          )}
        </h6>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default CardItem;
