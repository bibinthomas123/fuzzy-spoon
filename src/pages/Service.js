import { useState } from "react";
import WebsiteData from "../data/content";
import { motion } from "framer-motion";

function Service() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const data = WebsiteData.services;
  return (
    <motion.div
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -150, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <section className="services section">
        <h2 className="section__title">{data.title}</h2>
        <span className="section__subtitle">{data.desc}</span>
        <div className="services__container container grid">
          {data.cardDetails.map((item, i) => (
            <div className="services__content" key={i}>
              <>
                <i className={`${item.icon} services__icon`}></i>
                <h3 className="services__title">
                  {item.title[0]}
                  <br />
                  {item.title[1]}
                </h3>
              </>

              <span
                className="services__button"
                onClick={() => toggleTab(item.id)}
              >
                View More
                <i className="bx bx-right-arrow-alt services__button-icon"></i>
              </span>

              <motion.section
                className={
                  toggleState === item.id
                    ? "services__modal active-modal"
                    : "services__modal"
                }
                animate={{
                  opacity: toggleState === item.id ? 1 : 0,
                  y: toggleState === item.id ? 0 : 50,
                }}
                initial={{ opacity: 0, y: 150 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 0.3,
                }}
              >
                <motion.div
                  className="services__modal-content"
                  animate={{
                    opacity: toggleState === item.id ? 1 : 0,
                    y: toggleState === item.id ? 0 : 50,
                  }}
                  initial={{ opacity: 0, y: 150 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <i
                    onClick={() => toggleTab(0)}
                    className="bx bx-x services__modal-close"
                  ></i>
                  <h3 className="services__modal-title">{item.title}</h3>
                  <p className="services__modal-description">{item.desc}</p>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <p className="services__modal-info">{item.content}</p>
                    </li>
                  </ul>
                </motion.div>
              </motion.section>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Service;
