import React from "react";
import { Link } from "react-router-dom";

const Social = (props) => {
  let { data } = props;

  return (
    <div className="home__social">
      {data.map((item, index) => (
        <Link
          to={item.link}
          className="home__social-icon"
          target="_blank"
          key={index}
        >
          <i className={`uil ${item.icon}`}></i>
        </Link>
      ))}
    </div>
  );
};

export default Social;
