import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Team } from "./pages/Team/Team";
import { Process } from "./pages/Process/Process";
import { Pricing } from "./pages/Pricing/Pricing";
import { Blog } from "./pages/Blog/Blog";
import { Contact } from "./pages/Contact/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [activeLink, setActiveLink] = useState(1);
  const [navbarHidden, setNavbarHidden] = useState(true);

  return (
    <>
      <Router>
        <Header
          activeLink={activeLink}
          navbarHidden={navbarHidden}
          setNavbarHidden={setNavbarHidden}
        />

        <Routes>
          <Route path="/" element={<Home setActiveLink={setActiveLink} />} />
          <Route
            path="/about"
            element={<About setActiveLink={setActiveLink} />}
          />
          <Route
            path="/team"
            element={<Team setActiveLink={setActiveLink} />}
          />
          <Route
            path="/process"
            element={<Process setActiveLink={setActiveLink} />}
          />
          <Route
            path="/pricing"
            element={<Pricing setActiveLink={setActiveLink} />}
          />
          <Route
            path="/blog"
            element={<Blog setActiveLink={setActiveLink} />}
          />
          <Route
            path="/contact"
            element={<Contact setActiveLink={setActiveLink} />}
          />
        </Routes>

        <Footer setNavbarHidden={setNavbarHidden} />
      </Router>
    </>
  );
}

export default App;
