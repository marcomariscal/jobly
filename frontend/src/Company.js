import React, { useState, useEffect } from "react";
import Jobs from "./Jobs";
import JoblyApi from "./JoblyApi";
import AuthError from "./AuthError";

const Company = ({ handle, currentUser }) => {
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

  const render = (
    <>
      <h5 className="text-capitalize">{company.name}</h5>
      <p>{company.description}</p>
      <Jobs jobs={company.jobs} isLoading={loading} currentUser={currentUser} />
    </>
  );

  return currentUser ? render : <AuthError />;
};

export default Company;
