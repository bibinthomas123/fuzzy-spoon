import React from "react";

const Social = (props) => {
  let { data } = props;

  return (
    <div className="home__social">
      {data.map((item, index) => (
        <a
          href={item.link}
          className="home__social-icon"
          target="_blank"
          key={index}
        >
          <i className={`uil ${item.icon}`}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
