export const Navbar = () => {
    return(<div className="menu container">
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
                <a href="#">inicio</a>
              </li>
              <li>
                <a href="#">servicio</a>
              </li>
              <li>
                <a href="#">producto</a>
              </li>
              <li>
                <a href="#">contacto</a>
              </li>
            </ul>
          </nav>
        </div>
);
}

