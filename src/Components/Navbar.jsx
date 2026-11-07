import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/about" },
  { label: "Contact", path: "/about#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    if (path === "/about#contact") return false;
    return location.pathname === path;
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navigation principale">
        <div className="navbar-inner">
          {/* BRAND */}
          <Link
            to="/"
            className="navbar-brand"
            aria-label="WertSave Community - Accueil"
            onClick={closeMenu}
          >
            <span className="brand-symbol">
              W
              <span className="brand-symbol-dot" />
            </span>

            <span className="brand-name">
              <span className="brand-name-main">wertsave</span>
              <span className="brand-name-sub">COMMUNITY</span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="navbar-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={() =>
                  `navbar-link ${isActive(link.path) ? "active" : ""}`
                }
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="navbar-active-indicator"
                    transition={{ duration: 0.25 }}
                  />
                )}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="navbar-actions">
            <Link to="/join" className="navbar-cta">
              <span>Rejoindre WertSave</span>
              <ArrowUpRight size={17} strokeWidth={2} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="navbar-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                transition={{ duration: 0.16 }}
              >
                {menuOpen ? <X size={23} /> : <Menu size={23} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              className="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="mobile-navigation-inner">
                <div className="mobile-navigation-links">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`mobile-nav-link ${
                          isActive(link.path) ? "active" : ""
                        }`}
                      >
                        {link.label}
                        <ArrowUpRight size={17} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <Link
                  to="/join"
                  className="mobile-navbar-cta"
                  onClick={closeMenu}
                >
                  Rejoindre WertSave
                  <ArrowUpRight size={18} />
                </Link>

                <p className="mobile-navigation-caption">
                  Ensemble, construisons une nouvelle façon d'épargner.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
