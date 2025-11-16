import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navs = [
    { name: "Home", link: "/" },
    { name: "Solutions", link: "/solutions" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[75%] 
          rounded-3xl z-50 px-6 py-3 transition-all duration-300 border
          ${
            scrolled
              ? "backdrop-blur-xl bg-white/20 border-white/30 shadow-xl"
              : "bg-white/60 shadow-md"
          }
        `}
      >
        <div className="flex justify-between items-center">

          {/* left nav */}
          <div className="hidden md:flex space-x-6 text-sm font-semibold">
            {navs.map((item, i) => (
              <NavLink
                key={i}
                to={item.link}
                end={item.link === "/"}
                className={({ isActive }) =>
                  `transition-all duration-300 
                  ${
                    isActive
                      ? "text-green-600"
                      : "text-gray-800 hover:text-green-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* center logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2">
            <img src="/logo.png" alt="VerdaAgro" className="h-8 w-8" />
            <h1 className="text-xl font-bold tracking-wide text-green-500">
              FarmPredict
            </h1>
          </div>

          <button className="hidden md:block px-5 py-2 rounded-3xl font-semibold
            hover:bg-green-700 text-white shadow-lg 
            bg-green-800 transition-all duration-300">
            Contact Us
          </button>

          {/* mobile */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/*  mob sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/90 backdrop-blur-xl 
          shadow-2xl z-50 transform transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 space-y-8">
          <button
            className="absolute top-5 right-5 text-gray-700"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <nav className="mt-10 space-y-6 text-lg font-semibold text-gray-800">
            {navs.map((item, i) => (
              <NavLink
                key={i}
                to={item.link}
                end={item.link === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block transition-all duration-300 
                  ${
                    isActive ? "text-green-500" : "hover:text-green-800"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <button className="w-full px-5 py-3 rounded-2xl mt-8 font-semibold
            bg-green-500 text-white shadow-lg hover:bg-green-800 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
