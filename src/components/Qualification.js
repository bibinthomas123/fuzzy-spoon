import { useState } from "react";
import { motion } from "framer-motion";

function Qualification(props) {
  let { data } = props;
  const [Toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <>
      <motion.section
        className="qualification section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            {/* tab titles */}
            <div
              className={
                Toggle === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap  qualification__icon"></i>
              Education
            </div>
            <div
              className={
                Toggle === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase alt qualification__icon"></i>Work
              Experience
            </div>
          </div>

          {/* sections */}
          <div className="qualification__sections">
            <div
              className={
                Toggle === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {data.education.map((item, index) => (
                <div key={index}>
                  {index % 2 !== 0 ? (
                    <div className="qualification__data">
                      <div>
                        <h3 className="qualification__title">{item.name}</h3>
                        <span className="qualification__subtitle">
                          {item.subtitle}
                        </span>
                        <div className="qualification__calender">
                          <i className="uil uil-calender"></i> {item.year}
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <div className="qualification__line"></div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {" "}
                      <div className="qualification__data">
                        <div></div>
                        <div>
                          <span className="qualification__rounder"></span>
                          <div className="qualification__line"></div>
                        </div>
                        <div>
                          <h3 className="qualification__title">{item.name}</h3>
                          <span className="qualification__subtitle">
                            {item.subtitle}
                          </span>
                          <div className="qualification__calender">
                            <i className="uil uil-calender"></i> {item.year}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* section2 */}
            <div
              className={
                Toggle === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {data.experience.map((item, index) => (
                <div key={index}>
                  {index % 2 !== 0 ? (
                    <div className="qualification__data">
                      <div>
                        <h3 className="qualification__title">{item.name}</h3>
                        <span className="qualification__subtitle">
                          {item.subtitle}
                        </span>
                        <div className="qualification__calender">
                          <i className="uil uil-calender"></i> {item.year}
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <div className="qualification__line"></div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {" "}
                      <div className="qualification__data">
                        <div></div>
                        <div>
                          <span className="qualification__rounder"></span>
                          <div className="qualification__line"></div>
                        </div>
                        <div>
                          <h3 className="qualification__title">{item.name}</h3>
                          <span className="qualification__subtitle">
                            {item.subtitle}
                          </span>
                          <div className="qualification__calender">
                            <i className="uil uil-calender"></i> {item.year}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Qualification;
