import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact", cta: true },
];

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-900";

function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu when Escape is pressed
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const linkClass = (cta) => ({ isActive }) => {
    const base = `group relative flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-center font-medium transition-all duration-200 ${focusRing}`;

    if (cta) {
      return `${base} bg-gradient-to-r from-sky-300 to-violet-300 font-semibold text-indigo-950 shadow-lg shadow-indigo-950/30 hover:-translate-y-0.5 hover:shadow-xl ${
        isActive ? "ring-2 ring-white" : ""
      }`;
    }

    return `${base} ${
      isActive
        ? "bg-white text-indigo-900 shadow-md"
        : "text-indigo-100 hover:bg-white/15 hover:text-white"
    }`;
  };

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-indigo-900 via-indigo-800 to-violet-800 shadow-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between px-4 py-3">
        <NavLink
          to="/"
          className={`rounded-md text-lg font-bold text-white ${focusRing}`}
          onClick={() => setOpen(false)}
        >
          Mark John Magos
        </NavLink>

        <button
          type="button"
          className={`flex h-11 w-11 items-center justify-center rounded-md border border-indigo-300 text-white hover:bg-white/10 md:hidden ${focusRing}`}
          aria-expanded={open}
          aria-controls="main-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav
          id="main-menu"
          aria-label="Main"
          className={`${open ? "block" : "hidden"} mt-3 w-full border-t border-indigo-400/40 pt-3 md:mt-0 md:block md:w-auto md:border-0 md:pt-0`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1 md:rounded-full md:bg-white/10 md:p-1 md:ring-1 md:ring-white/20 md:backdrop-blur">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={linkClass(link.cta)}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  {link.cta && (
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;