import SectionItem from "./sectionItem";
import WebsiteData from "../data/content";
function Sections() {
  return (
    <>
      <SectionItem
        data={WebsiteData.skills.frontend.skills}
        title={WebsiteData.skills.frontend.title}
      />
      <SectionItem
        data={WebsiteData.skills.backend.skills}
        title={WebsiteData.skills.backend.title}
      />

      <SectionItem
        data={WebsiteData.skills.programming.skills}
        title={WebsiteData.skills.programming.title}
      />
      <SectionItem
        data={WebsiteData.skills.tools.skills}
        title={WebsiteData.skills.tools.title}
      />
    </>
  );
}

export default Sections;
