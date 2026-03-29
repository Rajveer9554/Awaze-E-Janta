import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { manualLogout } from "../utility/utilityService";
import { ToastContainer, toast } from "react-toastify";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import { RiChatSmileAiFill } from "react-icons/ri";

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    toast.error("Logged out successfully!");

    setTimeout(() => {
      manualLogout();
    }, 500);

    localStorage.removeItem("token");
    navigate("/login");
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-blue-900 shadow-md">
        <div className="h-16 px-4 sm:px-6 md:px-10 lg:px-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-wide hover:text-green-400 transition"
          >
            Awaze-E-Janata
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-sm lg:text-base">
            <NavLink
              to="/ai-chat"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold bg-white px-3 py-2 rounded-full"
                  : "text-white hover:text-blue-300 transition"
              }
            >
              <RiChatSmileAiFill size={20} className="inline-block mr-1 mb-1" />
              AiGuide
            </NavLink>

            {[
              { label: "About", path: "/about-us" },
              { label: "Contact", path: "/contact-us" },
              { label: "Complaint", path: "/register-complaints" },
            ].map(({ label, path }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-semibold bg-white px-3 py-2 rounded-full"
                      : "text-white hover:text-blue-300 transition"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}

            {token && (
              <>
                <li>
                  <button
                    onClick={handleLogout}
                    className="border-2 border-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition font-semibold"
                  >
                    Logout
                  </button>
                </li>

                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white  rounded-full"
                        : "text-white hover:bg-green-400 hover:text-black rounded-full transition"
                    }
                  >
                    <FaUserAlt />
                  </NavLink>
                </li>
              </>
            )}

            {!token && (
              <li>
                <NavLink
                  to="/get-started"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold bg-green-600 px-3 py-2 rounded-full"
                      : "text-white hover:text-blue-300 transition"
                  }
                >
                  SignUp
                </NavLink>
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile / Tablet Menu */}
        <div
          className={`md:hidden bg-blue-950 overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-125 py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 text-white text-sm">
            <li>
              <NavLink
                to="/ai-chat"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-semibold bg-white px-4 py-2 rounded-full"
                    : "text-white hover:text-blue-300"
                }
              >
                <RiChatSmileAiFill size={18} className="inline-block mr-1 mb-1" />
                AiGuide
              </NavLink>
            </li>

            {[
              { label: "About", path: "/about-us" },
              { label: "Contact", path: "/contact-us" },
              { label: "Complaint", path: "/register-complaints" },
            ].map(({ label, path }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-semibold bg-white px-4 py-2 rounded-full"
                      : "text-white hover:text-blue-300"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}

            {token && (
              <>
                <li>
                  <button
                    onClick={handleLogout}
                    className="border-2 border-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition font-semibold"
                  >
                    Logout
                  </button>
                </li>

                <li>
                  <NavLink
                    to="/dashboard"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white   rounded-full"
                        : "text-white hover:bg-green-400 hover:text-black rounded-full  transition"
                    }
                  >
                    <FaUserAlt  />
                  </NavLink>
                </li>
              </>
            )}

            {!token && (
              <li>
                <NavLink
                  to="/get-started"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold bg-green-600 px-4 py-2 rounded-full"
                      : "text-white hover:text-blue-300"
                  }
                >
                  SignUp
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </>
  );
}

export default Header;