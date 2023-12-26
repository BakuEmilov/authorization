import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/login">Sign in</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default HomePage;
