import React from "react";
import "./Job.css";

const Job = ({ title, equity, salary }) => {
  return (
    <div className="Job CardItem card">
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between mb-4">
          <span className="text-capitalize">{title}</span>
        </h6>
        <div className="card-text">{equity}</div>
        <div className="card-text">{salary}</div>
        <button
          type="button"
          className="Job btn btn-primary font-weight-bold text-uppercase float-right"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Job;
