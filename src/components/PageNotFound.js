import illustration from "../assests/404.svg";
import "./PageNotFound.css";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <motion.div
      className="page-not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={illustration}
        alt="Page Not Found Illustration"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        Oops! Page Not Found
      </motion.h1>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      >
        The page you are looking for doesn't exist or has been moved.
      </motion.p>
    </motion.div>
  );
};

export default PageNotFound;
