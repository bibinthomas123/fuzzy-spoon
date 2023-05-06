import React from "react";
import { motion } from "framer-motion";
import SingleBlog from "../components/blog/SingleBlog";
import blogData from "../data/blogs";

function Blog() {
  return (
    <div className="container">
      <section className="blog section">
        <motion.h2
          className="section__title"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -150, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          style={{ marginBottom: "5.5rem" }}
        >
          My Blogs
        </motion.h2>

        <div className="singleblog__container">
          {blogData.map((blog, index) => (
            <motion.div
              key={index}
              style={{ width: "100%" }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{
                delay: index * 0.1 + 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <SingleBlog blog={blog} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
