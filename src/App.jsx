// import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home";
import PortfolioPage from "./pages/portfolio";
import HumourPage from "./pages/humour";
import ContactPage from "./pages/contact";

function App()
{
  // const [currentPage, setCurrentPage] = useState("Home")

  return (
    <BrowserRouter>
      <main>
        <header><h1>Kevin Woodman</h1></header>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Online Portfolio</Link></li>
            <li><Link to="/humour">Humour</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/humour" exact element={<HumourPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
