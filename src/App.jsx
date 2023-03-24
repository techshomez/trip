import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
