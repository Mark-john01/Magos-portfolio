import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        Your Name
      </NavLink>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
