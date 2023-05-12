import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import WebsiteData from "../data/content";
import Reactjs from "../assests/images/frontend.png";
import Nodejs from "../assests/images/nodejs.png";
import Vscode from "../assests/images/vscode.png";
import Python from "../assests/images/python.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  margin: 30px;
  color: #333;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillIcon = styled.i`
  font-size: 24px;
  margin-right: 10px;
`;

const SkillName = styled.p`
  font-size: 18px;
  margin: 0;
`;

const Section = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  position: absolute;
  bottom: 4px;
  right: 7px;
  width: 250px;
  height: 250px;
`;

function Skills() {
  const imagePath = [Reactjs, Nodejs, Vscode, Python];

  const controls = useAnimation();

  const handleHover = async () => {
    await controls.start({
      rotate: 360,
      transition: { duration: 1 },
    });
  };

  const handleHoverEnd = async () => {
    await controls.start({
      rotate: 0,
      transition: { duration: 1 },
    });
  };

  return (
    <div className="container">
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Skill Set</span>
        <Container>
          {WebsiteData.skills.map((category, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key={category.section}
            >
              <Section>
                <Title>{category.section}</Title>
                <SkillList>
                  {category.skills.map((skill) => (
                    <SkillItem key={skill.name}>
                      <SkillIcon className={skill.icon}></SkillIcon>
                      <SkillName>{skill.name}</SkillName>
                    </SkillItem>
                  ))}
                </SkillList>
                <Image
                  src={imagePath[i]}
                  alt="react"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                  animate={controls}
                />
              </Section>
            </motion.div>
          ))}
        </Container>
      </section>
    </div>
  );
}

export default Skills;
