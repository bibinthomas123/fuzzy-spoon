import { motion } from "framer-motion";

function SectionItem(props) {
  let { data, title } = props;

  return (
    <motion.div
      className="skills__content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="skills__title"> {title} </h3>
      <motion.div
        className="skills__box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="skills__group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data.slice(0, 3).map((item, index) => (
            <motion.div
              className="skills__data"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <i className="bx bx-badge-check "></i>
              <div>
                <h3 className="skills__name">{item.name}</h3>
                <span className="skills_level">{item.level}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="skills__group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data.slice(3, 6).map((item, index) => (
            <motion.div
              className="skills__data"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <i className="bx bx-badge-check "></i>
              <div>
                <h3 className="skills__name">{item.name}</h3>
                <span className="skills_level">{item.level}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default SectionItem;
