import React, { useState, useEffect } from "react";
import "./Job.css";
import JoblyApi from "./JoblyApi";

const Job = ({ id, title, equity, salary, state, applyToJob }) => {
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    async function getJob(id) {
      const { job } = await JoblyApi.getJob(id);
      setIsApplied(job.state);
    }
    getJob(id);
  }, [id]);

  const handleClick = (e) => {
    const { value } = e.target;

    // value is the job id
    applyToJob(value);
    setIsApplied(true);
  };

  const buttonRender =
    state === "applied" || isApplied ? (
      <button
        type="button"
        className="Job btn btn-primary font-weight-bold text-uppercase float-right disabled"
        disabled
      >
        Applied
      </button>
    ) : (
      <button
        onClick={handleClick}
        type="button"
        className="Job btn btn-primary font-weight-bold text-uppercase float-right active"
        value={id}
      >
        Apply
      </button>
    );

  return (
    <div className="Job CardItem card">
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between mb-4">
          <span className="text-capitalize">{title}</span>
        </h6>
        <div className="card-text">Salary: {salary}</div>
        <div className="card-text">Equity: {equity}</div>
        {buttonRender}
      </div>
    </div>
  );
};

export default Job;
