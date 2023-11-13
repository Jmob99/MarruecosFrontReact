import React, { useState } from "react";
import "../styles/RegistroEmpleado.css";
import { Titulo } from "./Titulo";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

function RegistroEmpleados() {
  const [form, setForm] = useState({});
  const [password, setPassword] = useState(false);

  const inputs = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const checks = (e) => {
    const isChecked = e.target.checked;
    setForm({
      ...form,
      [e.target.name]: isChecked,
      
    });

    setPassword(isChecked);
  };

  const registrar = (e) => {
    const nomUsuario = form.usuario;
    
    if (!nomUsuario) {
      alert("El campo nombre de usuario no puede estar vacío");
      e.preventDefault();
      return;
    } 
    const valorEmail = form.email;

    if (!valorEmail) {
      alert("El campo email no puede estar vacio");
      e.preventDefault();
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorEmail)) {
      alert("Email invalido");
      e.preventDefault();
      return;
    }

    const valorPassword = form.password;

    if (!valorPassword || valorPassword.length < 8) {
      alert("Debe ingresar minimo 8 caracteres")
      e.preventDefault();
      return;
    }
  }
  return (
    <div>
      <Logo />
      <Titulo name={"Registro de Empleados"} />
      <section className="container">
        <form className="form-registroEmpleado" onSubmit={registrar}>
          <div className="form-group">
            <label htmlFor="usuario" id="label-usuario">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              className="form-control mb-3"
              onChange={inputs}
              value={form.usuario}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" id="label-email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control mb-3"
              onChange={inputs}
              value={form.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" id="label-password">
              Contraseña
            </label>
            <input
              type={password ? "text" : "password"}
              id="password"
              className="form-control mb-3"
              name="password"
              onChange={inputs}
              value={form.password}
            />
          </div>
          <div className="contraseña">
            <input
              type="checkbox"
              id="checkbox"
              value="Mostrar contraseña"
              name="checkbox"
              onChange={checks}
            />
            <label id="label" className="checkLabel">
              Mostrar contraseña
            </label>
          </div>
          <div className="d-flex justify-content-between">
            <Link to="/">
              <button type="submit" id="btnMenuPrincipal">
                Menu Principal
              </button>
            </Link>

            <button type="submit" id="btn-registro">
              Registrar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export { RegistroEmpleados };
