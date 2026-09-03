import { useEffect, useRef } from "react";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";

// import "./App.css";

import HomePage from "./pages/home";
import PortfolioPage from "./pages/portfolio";
import MuseumPage from "./pages/museum";
import HumourPage from "./pages/humour";
import ContactPage from "./pages/contact";
import NotFoundPage from "./pages/notfound";

function AppRoutes() {
  /*
  In a React single-page application (SPA), "document.referrer" is only reliable for the
  initial browser navigation to the website and may not identify the true source of a broken
  internal link after GitHub Pages issues a 404 redirect.  There is a workaround for this.

  1.  When GitHub Pages responds with a 404 status code and the contents of "public/404.html",
      the originally requested URL plus the original referrer URL is stored.
  2.  The browser is then automatically redirected to "index.html" which inserts the requested
      URL into the browser history and attaches the original referrer URL to the browser
      history state.
  3.  The web application is then loaded and this component initializes the "previousLocation"
      reference from the browser history state or, if there's nothing there, from
      "document.referrer".
  4.  This component updates "previousLocation" on every route change.

  This results in "previousLocation" always being the immediate prior URL regardless of whether
  the user navigated to the current page from an external link or through in-app navigation.
  */

  const referrer = window.history?.state?.referrerURL;
  const previousLocation = useRef(referrer !== undefined ? referrer : document.referrer);
  const location = useLocation();

  useEffect(() => {
    previousLocation.current = window.location.href
  }, [location]);

  return (
    <Routes>
      {/*
      "path" MUST be the first argument in each "<Route />" element and be set to a double-
      quoted string literal.  The "build" job in the GitHub Actions workflow "deploy.yaml" uses
      a regular expression to extract all literal "path" values from this file and create a
      corresponding directory structure in the "public" folder.
      */}

      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/museum" element={<MuseumPage />} />
      <Route path="/humour" element={<HumourPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage referrerURL={previousLocation.current} />} />
    </Routes>
    );
  }

function App() {
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

      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;