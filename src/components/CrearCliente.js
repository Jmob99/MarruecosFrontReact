import React, { useState } from "react";
import "../styles/CrearCliente.css";
import { Titulo } from "./Titulo";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

function CrearCliente() {
  const [from, setForm] = useState({});

  const inputs = (e) => {
    setForm({
      ...from,
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

      <form className="consultaCliente">
        <div className="inputCliente">
          <label htmlFor="formCliente">Ingrese documento</label>
          <input
            type="text"
            maxlength="15"
            name="cliente"
            id="formCliente"
            onChange={inputs}
            value={from.formCliente}
          />
        </div>

        <div className="container-btn">
          <button type="submit" id="btnBuscar">
            Buscar
          </button>
        </div>
      </form>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form className="registroCliente">
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
                    value={from.nombre}
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
                    value={from.apellido}
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
                    value={from.fechaNac}
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
                    autocomplete="on"
                    onChange={inputs}
                    value={from.email}
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
                    value={from.numeroDocumento}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="numeroCelular" className="texto-formulario">
                    * Celular
                  </label>
                  <input
                    type="tel"
                    maxlength="10"
                    id="numeroCelular"
                    name="numero-celular"
                    className="form-control"
                    onChange={inputs}
                    value={from.numeroCelular}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cod-reserva" className="texto-formulario">
                    Código reserva
                  </label>
                  <input
                    type="tel"
                    maxlength="10"
                    id="codReserva"
                    name="cod-reserva"
                    className="form-control"
                    onChange={inputs}
                    value={from.codReserva}
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <section class="container-botones text-center row">
        <div class="col-md-4 mb-4">
          <button type="submit" id="btnEliminar">
            Eliminar
          </button>
        </div>
        <div class="col-md-4 mb-4">
          <button type="submit" id="btnModificar">
            Modificar
          </button>
        </div>
        <div class="col-md-4 mb-4">
          <button type="submit" id="btnCrear">
            Crear
          </button>
        </div>
      </section>
      <section class=" container d-flex justify-content-center align-items-center">
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
