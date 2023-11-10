import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Social = (props) => {
  let { data } = props;

  return (
    <div className="home__social">
      {data.map((item, index) => (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          key={index}
        >
          <Link
            to={item.link}
            className="home__social-icon"
            target="_blank"
            key={index}
          >
            <i className={`uil ${item.icon}`}></i>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Social;
