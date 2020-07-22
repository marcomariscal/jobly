import React, { useState, useEffect } from "react";
import Jobs from "./Jobs";
import JoblyApi from "./JoblyApi";

const Company = ({ handle }) => {
  const [company, setCompany] = useState({});
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCompany(handle) {
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
      setIsLoading(false);
    }
    getCompany(handle);
  }, [handle, setCompany]);

  return (
    <>
      <h5 className="text-capitalize">{company.name}</h5>
      <p>{company.description}</p>
      <Jobs jobs={company.jobs} isLoading={loading} />
    </>
  );
};

export default Company;
