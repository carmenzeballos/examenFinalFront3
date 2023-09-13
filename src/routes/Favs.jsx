import { useContext, useEffect, useState } from "react";
import { Card } from "../components/Card";
import "../routes/Favs.modules.css";
import { ContextGlobal } from "../components/utils/global.context";

export function Favs() {
  const { tema } = useContext(ContextGlobal);
  const [dentistas, setDentistas] = useState(
    JSON.parse(localStorage.getItem("dentistas")) || []
  );

  useEffect(() => {
    const actDentista = JSON.parse(localStorage.getItem("dentistas") || "[]");
    setDentistas(actDentista);
  }, [dentistas]);

  return (
    <article
      className="favs"
      style={{ backgroundColor: tema.home, color: tema.font }}
    >
      <p className="title-favs">Dentistas favoritos</p>
      {dentistas.length === 0 ? (
        <p className="no-dentistas-message">No hay ningún dentista en favoritos</p>
      ) : (
        <section className="card-favs">
          {dentistas.map(function (item) {
            return (
              <Card
                name={item.name}
                username={item.username}
                key={item.id}
                id={item.id}
              />
            );
          })}
        </section>
      )}
    </article>
  );
}
