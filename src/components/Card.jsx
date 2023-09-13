/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import img from "../images/doctor.jpg";
import "./Card.modules.css";
import { useState, useEffect } from "react";

export function Card({ id, name, username }) {
  const dentista = {
    id,
    name,
    username,
  };

  const [mensaje, setMensaje] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {

    const dentistasFavoritos = JSON.parse(localStorage.getItem("dentistas") || "[]");
    const dentistaAdd = dentistasFavoritos.find((e) => e.id === dentista.id);
    setIsFavorite(!!dentistaAdd);
  }, [id]);

  const addFav = () => {
    const dentistas = JSON.parse(localStorage.getItem("dentistas") || "[]");
    const dentistaAdd = dentistas.find((e) => e.id === dentista.id);

    if (!dentistaAdd) {
            dentistas.push(dentista);
            localStorage.setItem("dentistas", JSON.stringify(dentistas));
            setIsAdded(true);
            setMensaje(true);
    } else {
            setIsAdded(false);
            setMensaje(true);
    }
            setTimeout(() => {
            setMensaje(false);
    }, 2500);
    console.log("Agregando dentistas" + dentista.id);
  };

  const removeFav = () => {
    const dentistas = JSON.parse(localStorage.getItem("dentistas") || "[]");
    const updatedDentistas = dentistas.filter(
      (e) => e.id !== dentista.id
    );
    localStorage.setItem("dentistas", JSON.stringify(updatedDentistas));
    setIsAdded(false);
    setMensaje(true);
    setTimeout(() => {
      setMensaje(false);
    }, 2500);
    console.log("Eliminando dentista" + dentista.id);
  };

  const handleToggleFavorite = () => {
    if (!isFavorite) {
      addFav();
    } else {
      removeFav();
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <article className={`card ${isFavorite ? "favorite" : ""}`}>
      <Link to={`/details/${id}`} className="card-link">
        <img className="imagen" src={img} alt="dentista" />
        <p className="name">{name}</p>
        <p className="user">{dentista.username}</p>
      </Link>
      <div className="toggle-container">
        <label className="toggle">
          <input
            type="checkbox"
            checked={isFavorite}
            onChange={handleToggleFavorite}
          />
          <span className="slider"></span>
        </label>
      </div>
      {mensaje && (
        <p className={`mensaje-card ${isAdded ? "added" : ""}`}>
          {isAdded
            ? "El dentista se añadió a favoritos"
            : "El dentista se eliminó de favoritos"}
        </p>
      )}
    </article>
  );
}