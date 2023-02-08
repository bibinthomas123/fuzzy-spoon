import React from "react";

function SectionItem(props) {
  let { data, title } = props;
  console.log(data, title);

  return (
    <div className="skills__content ">
      <h3 className="skills__title"> {title} </h3>
      <div className="skills__box">
        <div className="skills__group">
          {data.slice(0, 3).map((item, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check "></i>
              <div>
                <h3 className="skills__name">{item.name}</h3>
                <span className="skills_level">{item.level}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {data.slice(3, 6).map((item, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check "></i>
              <div>
                <h3 className="skills__name">{item.name}</h3>
                <span className="skills_level">{item.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionItem;
