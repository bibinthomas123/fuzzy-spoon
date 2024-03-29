import React from "react";
import blogData from "../data/blogs";
import { useParams } from "react-router-dom";
import SharePost from "../components/SharePost";
import PageNotFound from "../components/PageNotFound";
import TagButton from "../components/TagButton";
import slugify from "slugify";
import readingTime from "reading-time/lib/reading-time";
import { motion } from "framer-motion";

const SingleBlog = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => {
    const slugifiedTitle = slugify(blog.title, {
      lower: true,
      remove: /[*+~.()'"!?:@]/g,
    });
    return slugifiedTitle === slug;
  });
  const words = readingTime(blog.paragraph.props.children, {
    wordsPerMinute: 200,
  });
  const time = words.text;

  if (!blog) {
    return <PageNotFound />;
  }

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 120 }}
    >
      {" "}
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {blog.title}
              </h2>
              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-wrap items-center">
                  <div className="mb-5 flex items-center">
                    <p className="mr-5 flex items-center text-base font-medium text-body-color">
                      <i className="bx bx-calendar bx-sm"></i>&nbsp;
                      {blog.publishDate}
                    </p>
                    <p className="mr-5 flex items-center text-base font-medium text-body-color">
                      <i className="bx bx-time-five bx-sm"></i>&nbsp;
                      {time}
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <p style={{ textTransform: "capitalize" }}>
                    {blog.tags.map((tag, i) => (
                      <TagButton key={i} text={tag} />
                    ))}
                  </p>
                </div>
              </div>

              <div>
                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <img
                      src={blog.image}
                      alt="imaget454rfrthrh"
                      fill="cover"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed singleBlog_para ">
                  {blog.paragraph}
                </div>
              </div>
              <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right singleBlog_para">
                Share this post :
              </h5>
              <div className="flex items-center sm:justify-end">
                <SharePost
                  id={slugify(blog.title, {
                    lower: true,
                    remove: /[*+~.()'"!?:@]/g,
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SingleBlog;
