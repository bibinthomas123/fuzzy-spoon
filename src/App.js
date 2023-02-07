import "./App.css";
import Header from "./components/header/Header";
import About from "./pages/about/about";
import Home from "./pages/Home/Home";
import Layout from "./pages/layout/Layout";
import { Routes, Route,Link } from "react-router-dom";

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
      <Route path="about" element={<About />} />
      
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
      
   
  );
}

export default App;
