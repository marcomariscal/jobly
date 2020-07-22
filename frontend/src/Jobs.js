import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import Job from "./Job";

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

  const render = loading ? (
    <div>LOADING</div>
  ) : (
    jobs.map(({ id, title, equity, salary }) => (
      <Job key={id} title={title} equity={equity} salary={salary} />
    ))
  );

  return <div>{render}</div>;
};

export default Jobs;
