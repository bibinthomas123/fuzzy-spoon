import React from "react";
import { Link } from "react-router-dom";
import illustration from "../assests/404.svg";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <img src={illustration} alt="Page Not Found Illustration" />
      <h1>Oops! Page Not Found</h1>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to={"/"}>Go Back to Homepage</Link>
    </div>
  );
};

export default PageNotFound;
