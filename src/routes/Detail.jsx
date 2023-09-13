/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../routes/Detail.modules.css";
import { ContextGlobal } from "../components/utils/global.context";

export function Detail() {
  const { id } = useParams();
  const { tema } = useContext(ContextGlobal);
  const [detalle, setDetalle] = useState({});

  async function detailFetch() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    setDetalle(data);
  }

  useEffect(() => {
    detailFetch();
  }, []);

  return (
    <article
      className="detalle"
      style={{ backgroundColor: tema.home, color: tema.font }}
    >
      <h2 className="title-detalle">Detalles del dentista</h2>
      <div className="info">
        <p className="data">Nombre: {detalle.name}</p>
        <p className="data">Email: {detalle.email}</p>
        <p className="data">Celular: {detalle.phone}</p>
        <p className="data">Web: {detalle.website}</p>
      </div>
      <Link to="/" className="atras">
        Volver a Inicio
      </Link>
    </article>
  );
}
