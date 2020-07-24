import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import Search from "./Search";
import Job from "./Job";
import { Spinner } from "reactstrap";

const Jobs = () => {
  const [jobs, setJobs] = useState();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getJobs() {
      const { jobs } = await JoblyApi.getJobs();
      setJobs(jobs);
      setIsLoading(false);
    }
    getJobs();
  }, []);

  const searchFor = async (search) => {
    const { jobs } = await JoblyApi.getJobs(search);
    setJobs(jobs);
  };

  const render = loading ? (
    <div>
      <Spinner color="dark" />
    </div>
  ) : (
    <div>
      <Search searchFor={searchFor} />
      {jobs.length === 0 ? (
        <p className="lead">Sorry no jobs match that search...</p>
      ) : (
        jobs.map(({ id, title, equity, salary }) => (
          <Job key={id} title={title} equity={equity} salary={salary} />
        ))
      )}
    </div>
  );

  return <div className="col-md-8 offset-md-2">{render}</div>;
};

export default Jobs;
