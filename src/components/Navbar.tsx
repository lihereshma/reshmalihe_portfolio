import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const handleNavClick = (targetId: string) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    } else {
      document
        .getElementById(targetId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-8 py-6">
        <button
          type="button"
          onClick={() => handleNavClick("hero")}
          className="text-2xl font-medium text-white"
          aria-label="Go to top"
        >
          Reshma&nbsp;Lihe
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <button
            type="button"
            onClick={() => handleNavClick("about")}
            className="text-lightGray hover:text-white transition duration-300"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("work")}
            className="text-lightGray hover:text-white transition duration-300"
          >
            Work
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("projects")}
            className="text-lightGray hover:text-white transition duration-300"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="text-lightGray hover:text-white transition duration-300"
          >
            Contacts
          </button>
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden rounded-full border border-white/20 p-2 text-white transition-colors duration-300 hover:bg:white/10"
          aria-label="Toggle navigation"
        >
          <span className="block relative w-6 h-6">
            <span
              className={`absolute left-0 top-1 h-0.5 w-6 bg-white rounded-full transition-transform duration-300 ease-out ${open ? "translate-y-2 rotate-45" : ""
                }`}
            />
            <span
              className={`absolute left-0 top-2.5 h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-out ${open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 bg-white rounded-full transition-transform duration-300 ease-out ${open ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`
          md:hidden overflow-hidden bg-black/90 backdrop-blur border-t border-white/10
          transition-all duration-300 ease-out
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-2 text-sm">
          <button
            type="button"
            onClick={() => handleNavClick("about")}
            className="py-2 text-left hover:text-gray-300 transition-colors"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("projects")}
            className="py-2 text-left hover:text-gray-300 transition-colors"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("work")}
            className="py-2 text-left hover:text-gray-300 transition-colors"
          >
            Work
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="py-2 text-left hover:text-gray-300 transition-colors"
          >
            Contacts
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
