import "./App.css";
import About from "./pages/about";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Layout from "./pages/Layout";
import { Routes, Route,Link } from "react-router-dom";
import Service from "./pages/Service";

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
      
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
      
   
  );
}

export default App;
