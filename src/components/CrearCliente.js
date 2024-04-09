import React, { useState } from "react";
import "../styles/CrearCliente.css";
import { Titulo } from "./Titulo";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

function CrearCliente() {
  const [form, setForm] = useState({});
  
  const [tipoDocumentoSeleccionado, setTipoDocumentoSeleccionado] = useState("selectDocumento");

  const inputs = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validarBusqueda = (e) => {
    // Verificar si el campo de búsqueda está vacío
    if (!form.cliente) {
      alert("El campo de búsqueda no puede estar vacío");
      e.preventDefault();
      document.getElementById("formCliente").focus();
      return;
    } else if (!/^\d+$/.test(form.cliente)) {
      alert("ingrese solo numeros");
      e.preventDefault();
      document.getElementById("formCliente").focus();
      document.getElementById("formCliente").value = "";
      return;
    }
  };

  //validar el campo nombre y apellido
  const crear = (e) => {
    const nombre = document.getElementById("nombre").value || "";
    if (nombre === "") {
      alert("El campo Nombre no puede estar vacío");
      e.preventDefault();
      document.getElementById("nombre").focus();
      return;
    }

    const sololetras = /^[a-zA-Záéíóúüñ]+$/;

    if (!sololetras.test(nombre)) {
      alert("Solo se pueden ingresar letras en el campo Nombre");
      e.preventDefault();
      document.getElementById("nombre").focus();
      document.getElementById("nombre").value = "";
      return;
    }

    const apellido = document.getElementById("apellido").value || "";

    if (apellido === "") {
      alert("El campo Apellido no puede estar vacío");
      e.preventDefault();
      document.getElementById("apellido").focus();
      return;
    }

    if (!sololetras.test(apellido)) {
      alert("Solo se pueden ingresar letras en el campo Apellido");
      e.preventDefault();
      document.getElementById("apellido").focus();
      document.getElementById("apellido").value = "";
      return;
    }

    const fechanaci = document.getElementById("fechaNac").value || "";

    if (fechanaci === "") {
      alert("ingrese su fecha de nacimiento");
      e.preventDefault();
      document.getElementById("fechaNac").focus();
      return;
    }

    const fechaNacimiento = new Date(fechanaci);
    const fechaHoy = new Date();
    const diferenciaEdad =
      fechaHoy.getFullYear() - fechaNacimiento.getFullYear();

    if (diferenciaEdad < 18) {
      alert("El cliente es menor de edad, no se puede registrar");
      document.getElementById("fechaNac").focus();
      document.getElementById("fechaNac").value = "";
      e.preventDefault();
      return;
    }

    const campemail = document.getElementById("email").value || "";

    if (campemail === "") {
      alert("El campo email no puede estar vacio");
      document.getElementById("email").focus();
      e.preventDefault();
      return;
    }

    const valiemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!valiemail.test(campemail)) {
      alert("Email invalido");
      document.getElementById("email").focus();
      document.getElementById("email").value = "";
      e.preventDefault();
      return;
    }

    const tipoDocumento = tipoDocumentoSeleccionado;
    if (tipoDocumento === "selectDocumento") {
      alert("Debe seleccionar un tipo de documento");
      document.getElementById("tipoDocumento").focus();
      e.preventDefault();
      return;
    }

    const valiDocumento =
      document.getElementById("numeroDocumento").value || "";

    if (valiDocumento === "") {
      alert("El campo Documento no puede estar vacio");
      document.getElementById("numeroDocumento").focus();
      e.preventDefault();
      return;
    }

    if (isNaN(valiDocumento)) {
      alert("ingrese solo numeros su Numero de Documento");
      document.getElementById("numeroDocumento").focus();
      document.getElementById("numeroDocumento").value = "";
      e.preventDefault();
      return;
    }

    const valiCelular = document.getElementById("numeroCelular").value || "";

    if (valiCelular === "") {
      alert("El campo Celular no puede estar vacio");
      document.getElementById("numeroCelular").focus();
      e.preventDefault();
      return;
    }

    if (isNaN(valiCelular) || valiCelular.length < 10) {
      if (isNaN(valiCelular)) {
        alert("Solo se puede ingresar números en el Número de Celular");
      } else {
        alert("Número de Celular inválido. Debe tener al menos 10 dígitos.");
      }

      document.getElementById("numeroCelular").focus();
      document.getElementById("numeroCelular").value = "";
      e.preventDefault();
      return;
    }
  };

  return (
    <div>
      <Logo />
      <Titulo name={"Crear Cliente"} />

      <aside>
        <p className="parrafo-title ml-md-5 d-md-inline">
          * Campos obligatorios
        </p>
      </aside>

      <form className="consultaCliente-R">
        <div className="inputCliente">
          <label htmlFor="formCliente">Ingrese documento</label>
          <input
            type="text"
            maxLength="15"
            name="cliente"
            id="formCliente"
            onChange={inputs}
            value={form.formCliente}
          />
        </div>

        <div className="container-btn">
          <button type="submit" id="btnBuscarR" onClick={validarBusqueda}>
            Buscar
          </button>
        </div>
      </form>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form className="registroCliente-R">
              <fieldset className="left-form">
                <div className="form-group">
                  <label htmlFor="nombre" className="texto-formulario">
                    * Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre-cliente"
                    className="form-control"
                    onChange={inputs}
                    value={form.nombre}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apellido" className="texto-formulario">
                    * Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido-cliente"
                    className="form-control"
                    onChange={inputs}
                    value={form.apellido}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fechaNac" className="texto-formulario">
                    * Fecha Nacimiento
                  </label>
                  <input
                    type="date"
                    id="fechaNac"
                    name="fecha-nacimiento"
                    required
                    className="form-control"
                    onChange={inputs}
                    value={form.fechaNac}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="texto-formulario">
                    * Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="correo"
                    className="form-control"
                    autoComplete="on"
                    onChange={inputs}
                    value={form.email}
                  />
                </div>
              </fieldset>
            </form>
          </div>
          <div className="col-md-6">
            <form className="registroCliente">
              <fieldset className="right-form">
                <div className="form-group">
                  <label htmlFor="tipoDocumento" className="texto-formulario">
                    * Seleccione
                  </label>
                  <select
                    name="tipo-documento"
                    id="tipoDocumento"
                    className="form-select"
                    value={tipoDocumentoSeleccionado}
                    onChange={(e) =>
                      setTipoDocumentoSeleccionado(e.target.value)
                    }
                  >
                    <option value="selectDocumento">Tipo de documento</option>
                    <option value="Cedula">CC</option>
                    <option value="Pasaporte">PS</option>
                    <option value="Cedula Extranjeria">CE</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="numeroDocumento" className="texto-formulario">
                    * Documento
                  </label>
                  <input
                    type="text"
                    id="numeroDocumento"
                    name="numero-documento"
                    className="form-control"
                    onChange={inputs}
                    value={form.numeroDocumento}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="numeroCelular" className="texto-formulario">
                    * Celular
                  </label>
                  <input
                    type="tel"
                    maxLength="10"
                    id="numeroCelular"
                    name="numero-celular"
                    className="form-control"
                    onChange={inputs}
                    value={form.numeroCelular}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="codReserva" className="texto-formulario">
                    Código reserva
                  </label>
                  <input
                    type="tel"
                    maxLength="10"
                    id="codReserva"
                    name="cod-reserva"
                    className="form-control"
                    onChange={inputs}
                    value={form.codReserva}
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <section className="container-botones text-center row">
        <div className="col-md-4 mb-4">
          <button type="submit" id="btnEliminar">
            Eliminar
          </button>
        </div>
        <div className="col-md-4 mb-4">
          <button type="submit" id="btnModificar">
            Modificar
          </button>
        </div>
        <div className="col-md-4 mb-4">
          <button type="submit" id="btnCrearR" onClick={crear}>
            Crear
          </button>
        </div>
      </section>
      <section className=" container d-flex justify-content-center align-items-center">
        <Link to="/">
          <button type="submit" id="btnMenuPrincipal">
            Menu Principal
          </button>
        </Link>
      </section>
    </div>
  );
}

export { CrearCliente };
