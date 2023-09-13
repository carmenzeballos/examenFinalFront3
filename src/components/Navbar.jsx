import { Link } from "react-router-dom";
import "../components/Navbar.modules.css";
import { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";

export function Navbar() {
  const { cambioTema } = useContext(ContextGlobal);
  const { tema } = useContext(ContextGlobal);
  const [colorBoton, setColorBoton] = useState("#8B4513");

  function cambioColorBoton() {
    if (colorBoton === "#8B4513") {
      setColorBoton("#c19995");
    } else {
      setColorBoton("#8B4513");
    }
    cambioTema(); 
  }

  return (
    <nav className="navbar" style={{ backgroundColor: tema.nav, color: tema.font }}>
      <Link className="nav-title" to={"/"}>
        Principal
      </Link>
      <Link className="nav-title" to={"/contact"}>
        Contacto
      </Link>
      <Link className="nav-title" to={"/favs"}>
        Favoritos
      </Link>
      <button className="tema-button" onClick={cambioColorBoton}>
        Dark/Ligth
      </button>
    </nav>
  );
}
