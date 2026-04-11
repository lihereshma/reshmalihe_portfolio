import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AllProjects from "./components/AllProjects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";


/* ----------------------------------------
   Restore Route for GitHub Pages 404
-----------------------------------------*/
function RestoreRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const path = params.get("p");

    if (path && path !== window.location.pathname) {
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}

/* ----------------------------------------
   App Component
-----------------------------------------*/
function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <RestoreRoute />
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 lg:px-8">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Work />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
