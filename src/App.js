import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App;
