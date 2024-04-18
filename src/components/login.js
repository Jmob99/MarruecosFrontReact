import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Titulo } from "./Titulo";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import "../styles/login.css";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseApp from "./fireBaseconfig";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseñaRegistro, setContraseñaRegistro] = useState("");
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [ingresoExitoso, setIngresoExitoso] = useState(false);

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };

  const handleCheckboxChange = () => {
    setMostrarContraseña(!mostrarContraseña);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleNombreCompletoChange = (event) => {
    setNombreCompleto(event.target.value);
  };

  const handleCedulaChange = (event) => {
    setCedula(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleContraseñaRegistroChange = (event) => {
    setContraseñaRegistro(event.target.value);
  };

  const handleRegistroSubmit = async (event) => {
    event.preventDefault();

    if (!nombreCompleto || !cedula || !correo || !contraseñaRegistro) {
      alert("Faltan campos por completar");
      return;
    }

    try {
      const auth = getAuth(firebaseApp);
      await createUserWithEmailAndPassword(auth, correo, contraseñaRegistro);
      alert("Usuario registrado correctamente");
      console.log("Usuario registrado correctamente");
      setRegistroExitoso(true);

      // Resetear el formulario
      setNombreCompleto("");
      setCedula("");
      setCorreo("");
      setContraseñaRegistro("");
      // Cerrar el modal
      setModalVisible(false);
      if (registroExitoso) return <Navigate to="/" />;
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Error al registrar usuario. Por favor, inténtalo de nuevo.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!usuario || !contraseña) {
      // Validar que los campos no estén vacíos
      alert("Por favor ingresa usuario y contraseña");
      return;
    }

    try {
      const auth = getAuth(); // Obtener el objeto de autenticación
      await signInWithEmailAndPassword(auth, usuario, contraseña); // Intentar iniciar sesión
      setIngresoExitoso(true);
      //Reseterar el formulario
      setUsuario("");
      setContraseña("");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("El usuario no existe. Por favor, regístrate primero.");
      } else if (error.code === "auth/wrong-password") {
        alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
      } else {
        console.error("Error al iniciar sesión:", error);
        alert("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
      }
    }
  };

  if (ingresoExitoso) {
    return <Navigate to="/cliente" />;
  }
  return (
    <div>
      <Logo />
      <Titulo name={"Inicio Sesion"} />
      <nav className="container-navR">
        <ul className="container-lista">
          <img
            src="images/logo-hm.png"
            alt=""
            className="logo img-fluid"
            id="logoSize"
          />
          <li onClick={toggleModal} style={{ cursor: "pointer" }}>
            Registrar usuario
          </li>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li>Ayuda</li>
          </Link>
        </ul>
      </nav>
      <main>
        <section className="container-formulario">
          <img
            src="/favicon.ico"
            className="imagen-usuario"
            alt="imagen-usuario"
          />
          <form onSubmit={handleSubmit} className="formulario-datos">
            <div>
              <h2 className="titulo-usuario">Usuario</h2>
              <input
                type="text"
                id="usuario"
                value={usuario}
                onChange={handleUsuarioChange}
              />
            </div>
            <div>
              <h2 className="titulo-contraseña">Contraseña</h2>
              <input
                type={mostrarContraseña ? "text" : "password"}
                id="password"
                value={contraseña}
                onChange={handleContraseñaChange}
              />
            </div>
            <div className="contraseña">
              <input
                type="checkbox"
                id="checkbox"
                checked={mostrarContraseña}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox">Mostrar contraseña</label>
            </div>
            <div className="container-btn">
              <input type="submit" value="Ingresar" id="btn" />
            </div>
          </form>
        </section>
      </main>
      <footer>
        <section className="container-footer">
          <a
            target="_blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            ¿Olvidaste tu contraseña?
          </a>
        </section>
      </footer>

      {/* Modal */}
      {modalVisible && (
        <>
          <div className="modal-backdrop fade show"></div>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div
                className="modal-content"
                style={{ backgroundColor: "rgb(255, 228, 154)" }}
              >
                <div className="modal-header">
                  <h5 className="modal-title">Registrar Usuario</h5>
                  <button type="button" className="close" onClick={toggleModal}>
                    <span>&times;</span>
                  </button>
                </div>
                <form onSubmit={handleRegistroSubmit}>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="nombreCompleto">Nombre Completo</label>
                      <input
                        type="text"
                        id="nombreCompleto"
                        className="form-control"
                        value={nombreCompleto}
                        onChange={handleNombreCompletoChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cedula">Número de Cédula</label>
                      <input
                        type="text"
                        id="cedula"
                        className="form-control"
                        value={cedula}
                        onChange={handleCedulaChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="correo">Correo Electrónico</label>
                      <input
                        type="email"
                        id="correo"
                        className="form-control"
                        value={correo}
                        onChange={handleCorreoChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contraseñaRegistro">Contraseña</label>
                      <input
                        type="password"
                        id="contraseñaRegistro"
                        className="form-control"
                        value={contraseñaRegistro}
                        onChange={handleContraseñaRegistroChange}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
                      Guardar
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={toggleModal}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export { Login };
