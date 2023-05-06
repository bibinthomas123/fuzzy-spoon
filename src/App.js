import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./pages/about";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Layout from "./pages/Layout";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Contact from "./pages/contact";
import Blog from "./pages/Blog";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import PageNotFound from "./components/PageNotFound";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  if (isLoading) {
    // return <Preloader />;
    return <></>;
  }
  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
