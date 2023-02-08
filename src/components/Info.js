import React from "react";

function Info(props) {
  let { data } = props;
  return (
    <div className="about__info grid">
      {data.map((item, index) => (
        <div className="about__box" key={index}>
          <i clasaName="bx bx-award about__icon"></i>
          <h3 className="about__title">{item.name} </h3>
          <span className="about__subtitle">{item.desc}</span>
        </div>
      ))}
    </div>
  );
}

export default Info;
