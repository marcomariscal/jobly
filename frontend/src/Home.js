import React from "react";
import "./Home.css";

const Home = ({ isLoggedIn }) => {
  return (
    <div className="Home">
      <div className="container text-center">
        <header>
          <h1 className="mb-4 font-weight-bold">Jobly</h1>
        </header>
        <p className="lead">All the jobs in one convenient place.</p>
        {isLoggedIn && <h2>Welcome Back!</h2>}
      </div>
    </div>
  );
};

export default Home;
