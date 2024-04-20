import React from "react";
import { Logo } from "./Logo";
import { Titulo } from "./Titulo";
import { Link } from "react-router-dom";
import { BtnOpciones } from "./BtnOpciones";

function Inicio() {
  const linkStyles = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <div>
      <Logo />
      <Titulo name={"Inicio"} /> 
      <Link to="/cliente" style={linkStyles}>
        <BtnOpciones name={"Crear Cliente"} />
      </Link>
      <Link to="/listado-clientes" style={linkStyles}>
        <BtnOpciones name={"Listado de Clientes"} />
      </Link>
    </div>
  );
}

export { Inicio };
