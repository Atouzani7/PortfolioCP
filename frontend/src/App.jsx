import "./reset.scss";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Competences from "./pages/Competences/Competences";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Header from "./composants/header/Header";
import Footer from "./composants/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Competences />} />
        <Route path="/book" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
