import React from "react";
import { motion } from "framer-motion";
import BlogGrid from "../components/blog/BlogGrid";
import blogData from "../data/blogs";

function Blog() {
  const sortedBlogs = blogData.sort((a, b) => {
    const dateA = new Date(
      a.publishDate.replace(/(\d+)\/(\w+)\/(\d+)/, "$2 $1, $3")
    );
    const dateB = new Date(
      b.publishDate.replace(/(\d+)\/(\w+)\/(\d+)/, "$2 $1, $3")
    );
    //sorts from newest to oldest
    return dateB - dateA;
  });

  
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

        <div className="blog__container">
          {sortedBlogs.map((blog, index) => (
            <motion.div
              key={index}
              style={{ width: "100%" }}
              initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <BlogGrid blog={blog} />
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
