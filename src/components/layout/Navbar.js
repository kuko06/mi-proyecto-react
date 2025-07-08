import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="menu container">
      <input type="checkbox" id="menu" />
      <label htmlFor="menu">
        <img
          src={`/images/menu.png`}
          className="menu-icono"
          alt="icono menu"
        />
      </label>
      <nav className="navbar">
        <ul>
          <li>
            <Link
              to="inicio"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="servicio"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Servicio
            </Link>
          </li>
          <li>
            <Link
              to="producto"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Producto
            </Link>
          </li>
          <li>
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};