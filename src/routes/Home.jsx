import { useState, useEffect, useContext } from "react";
import { Card } from "../components/Card";
import "../routes/Home.modules.css";
import { ContextGlobal } from "../components/utils/global.context";

export function Home() {
  const [data, setData] = useState([]);
  const { tema } = useContext(ContextGlobal);
  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <article
      className="home"
      style={{ backgroundColor: tema.home, color: tema.font }}
    >
      <p className="bienvenido">Bienvenido al Home del Sitio</p>
      <hr />
      <br />
      <section className="card-home">
        {data.map(function (item) {
          return (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              username={item.username}
            />
          );
        })}
      </section>
    </article>
  );
}
