import React, { useState } from "react";
import "../styles/CrearCliente.css";
import { Titulo } from "./Titulo";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

function CrearCliente() {
  const [form, setForm] = useState({});

  const inputs = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const [tipoDocumentoSeleccionado, setTipoDocumentoSeleccionado] =
    useState("selectDocumento");

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
          <button type="submit" id="btnBuscarR">
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
          <button type="submit" id="btnCrearR">
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
