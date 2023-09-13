/* eslint-disable react/prop-types */
import { useState } from "react";
import { ContextGlobal, estadoInicial } from "./global.context";

export function ContextProvider({ children }) {
  const [tema, setTema] = useState(estadoInicial.tema.ligth);
  const cambioTema = () => {
    setTema((e) =>
      e === estadoInicial.tema.ligth
        ? estadoInicial.tema.dark
        : estadoInicial.tema.ligth
    );
  };

  return (
    <ContextGlobal.Provider value={{ tema, cambioTema }}>
      {children}
    </ContextGlobal.Provider>
  );
}
