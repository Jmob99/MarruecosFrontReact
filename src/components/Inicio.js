import React from "react";
import { Logo } from "./Logo";
import { Titulo } from "./Titulo";
import { Link, useNavigate} from "react-router-dom";
import { BtnOpciones } from "./BtnOpciones";
import '../styles/Inicio.css'
import { getAuth} from "firebase/auth";
import app  from "./fireBaseconfig";
const auth = getAuth(app);


function Inicio() {
  const linkStyles = {
    textDecoration: "none",
    color: "inherit",
  };
  const navigate = useNavigate();
  const handleLogOut = () => {
    auth.signOut().then(() => {
      navigate('/')
    }).catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
  }
  return (
    <>
      <Logo />
      <Titulo name={"Inicio"} />
      <Link to="/cliente" style={linkStyles}>
        <BtnOpciones name={"Crear Cliente"} />
      </Link>
      <Link to="/listado-clientes" style={linkStyles}>
        <BtnOpciones name={"Listado de Clientes"} />
      </Link>
      <div id='botones' className='d-flex flex-column align-items-center'>
        <button type="button" id="btn_Cerrar_sesion" onClick={handleLogOut} >Cerrar Sesión</button>
      </div>
    </>
  );
}

export { Inicio };
