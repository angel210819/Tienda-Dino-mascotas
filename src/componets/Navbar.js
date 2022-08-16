import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/perros" activeClassName="active">
            Alimetos Caninos
          </NavLink>
        </li>
        <li>
          <NavLink to="/gatos" activeClassName="active">
            Alimentos Felinos
          </NavLink>
        </li>
        <li>
          <NavLink to="/accesorios" activeClassName="active">
            Accesorios
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
