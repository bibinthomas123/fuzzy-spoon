import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Layout from "./pages/Layout";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Contact from "./pages/contact";
import { AnimatePresence } from "framer-motion";

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
function App() {
  const location = useLocation();
  
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      mode="wait"
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
