import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./JoblyApi";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCompanies() {
      const { companies } = await JoblyApi.getCompanies();
      setCompanies(companies);
      setIsLoading(false);
    }
    getCompanies();
  }, []);

  const render = loading ? (
    <div>LOADING</div>
  ) : (
    companies.map(({ handle, name, description, logo_url }) => (
      <CompanyCard
        key={handle}
        handle={handle}
        name={name}
        description={description}
        logo_url={logo_url}
      />
    ))
  );

  return <div>{render}</div>;
};

export default Companies;
