import { motion } from "framer-motion";

function Info(props) {
  let { data } = props;
  return (
    <div className="about__info grid">
      {data.map((item, index) => (
        <motion.div
          className="about__box"
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
        >
          <motion.i
            className={item.icon}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.h3
            className="about__title"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            {item.name}
          </motion.h3>
          <motion.span
            className="about__subtitle"
            style={{ fontSize: "14px", fontWeight: "bold" }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            {item.desc}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

export default Info;
