// import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home";
import PortfolioPage from "./pages/portfolio";
import MuseumPage from "./pages/museum";
import HumourPage from "./pages/humour";
import ContactPage from "./pages/contact";

function App()
{
  // const [currentPage, setCurrentPage] = useState("Home")

  return (
    <BrowserRouter>
      <header>
        <h1>Kevin Woodman</h1>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Online Portfolio</Link></li>
            <li><Link to="/museum">Website Museum</Link></li>
            <li><Link to="/humour">Humour</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/museum" element={<MuseumPage />} />
        <Route path="/humour" exact element={<HumourPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
