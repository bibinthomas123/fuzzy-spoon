import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Layout from "./pages/Layout";
import Service from "./pages/Service";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

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
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
