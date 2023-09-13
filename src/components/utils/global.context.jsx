/* eslint-disable react-refresh/only-export-components */

import { createContext } from "react";

export const estadoInicial = {
  tema: {
    dark: {
      nav: "#333333",
      home: "#2E2E2E",
      footer: "#333333",
      font: "#F0F0F0",
    },
    ligth: {
      nav: "#EFEFEF",
      home: "#FAFAFA",
      footer: "#EFEFEF",
      font: "#333333 ",
    },
  },
};

export const ContextGlobal = createContext(estadoInicial);
