// import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

// import "./App.css";

import HomePage from "./pages/home";
import PortfolioPage from "./pages/portfolio";
import MuseumPage from "./pages/museum";
import HumourPage from "./pages/humour";
import ContactPage from "./pages/contact";
import NotFoundPage from "./pages/notfound";

function App()
{
  // const [currentPage, setCurrentPage] = useState("Home")

  return (
    <BrowserRouter>
      <header>
        <h1>Kevin Woodman</h1>

        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/portfolio">Online Portfolio</NavLink></li>
            <li><NavLink to="/museum">Website Museum</NavLink></li>
            <li><NavLink to="/humour">Humour</NavLink></li>
            <li><NavLink to="/contact">Contact Me</NavLink></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/museum" element={<MuseumPage />} />
        <Route path="/humour" exact element={<HumourPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
