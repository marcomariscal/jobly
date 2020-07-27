import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import Search from "./Search";
import JoblyApi from "./JoblyApi";
import { Spinner } from "reactstrap";
import AuthError from "./AuthError";

const Companies = ({ currentUser }) => {
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

  const searchFor = async (search) => {
    const { companies } = await JoblyApi.getCompanies(search);
    console.log(search);
    setCompanies(companies);
  };

  const render = loading ? (
    <div>
      <Spinner color="dark" />
    </div>
  ) : (
    <div>
      <Search searchFor={searchFor} />
      {companies.length === 0 ? (
        <p className="lead">Sorry no companies match that search...</p>
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
      )}
    </div>
  );

  return (
    <div className="col-md-8 offset-md-2">
      {currentUser ? render : <AuthError />}
    </div>
  );
};

export default Companies;
