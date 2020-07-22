import React from "react";
import CompanyCard from "./CompanyCard";

const Company = ({ handle, name, description, logo_url }) => {
  return (
    <div>
      {
        <CompanyCard
          handle={handle}
          name={name}
          description={description}
          logo_url={logo_url}
        />
      }
    </div>
  );
};

export default Company;
