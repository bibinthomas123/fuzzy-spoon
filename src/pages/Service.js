import React, { useState } from "react";
import WebsiteData from "../data/content";
function Service() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const data = WebsiteData.services;
  return (
    <section className="services section">
      <h2 className="section__title">{data.title}</h2>
      <span className="section__subtitle">{data.desc}</span>
      <div className="services__container container grid">
        {data.cardDetails.map((item, i) => (
          <div className="services__content" key={i}>
            <React.Fragment>
              <i className={`${item.icon} services__icon`}></i>
              <h3 className="services__title">
                {item.title[0]}
                <br />
                {item.title[1]}
              </h3>
            </React.Fragment>

            <span
              className="services__button"
              onClick={() => toggleTab(item.id)}
            >
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === item.id
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">{item.title}</h3>
                <p className="services__modal-description">{item.desc}</p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    {/* <i className="uil uil-check-circle services__modal-icon"></i> */}
                    <p className="services__modal-info">{item.content}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
