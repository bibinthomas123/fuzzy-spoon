import React from "react";
import SectionItem from "./sectionItem";
import WebsiteData from "../data/content";
function Sections() {
  return (
    <>
      <SectionItem data={WebsiteData.skills.frontend.skills} title={WebsiteData.skills.frontend.title} />
      <SectionItem data={WebsiteData.skills.backend.skills} title={WebsiteData.skills.backend.title} />
     </>
  );
}

export default Sections;
