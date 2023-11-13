import React, { useState } from 'react';
import "../styles/RegistroDatos.css";
import { Titulo } from "./Titulo";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

function RegistroDatos() {
    const [clientesRegistradosVisible, setClientesRegistradosVisible] = useState(false);
    const [registrarClienteVisible, setRegistrarClienteVisible] = useState(false);
    const [ingresarDatosVisible, setIngresarDatosVisible] = useState(false);
   

    const handleClientesRegistradosClick = () => {
        setClientesRegistradosVisible(!clientesRegistradosVisible);
        setRegistrarClienteVisible(false);
        setIngresarDatosVisible(false);
    };

    const handleRegistrarClienteClick = () => {
        setRegistrarClienteVisible(!registrarClienteVisible);
        setClientesRegistradosVisible(false);
        setIngresarDatosVisible(false);
    };

    const handleIngresarDatosClick = () => {
        setIngresarDatosVisible(!ingresarDatosVisible);
        setClientesRegistradosVisible(false);
        setRegistrarClienteVisible(false);
    };
   
    const [form, setForm] = useState({});

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const [tipoDocumentoSeleccionado, setTipoDocumentoSeleccionado] =
    useState("selectDocumento");

    const [fechaIngreso, setFechaIngreso] = useState("");
    const [fechaSalida, setFechaSalida] = useState("");
    const [cantidadDias, setCantidadDias] = useState("");

    const handleFechaIngresoChange = (e) => setFechaIngreso(e.target.value);
    const handleFechaSalidaChange = (e) => setFechaSalida(e.target.value);
    const handleCantidadDiasChange = (e) => setCantidadDias(e.target.value);


    return (
        <div>
            <Logo />
            <Titulo name={"Registro de cliente/reserva"} />
            <main className="container">
                <div className="formulario-opciones row justify-content-center">
                    <div className="col-md-8">
                        
                        {/* Seccion cliente registrados */}                        
                        <section>
                            <h4 className="titulo-opciones mb-4" id="clienteRegistrado" onClick={handleClientesRegistradosClick}>
                                Clientes registrados
                            </h4>
                            <div className={`contenedorDesplegable ${clientesRegistradosVisible ? 'visible' : ''}`} id="contenedorRegistrados">
                                <div className="container mb-4">
                                    <form className="row d-flex justify-content-center align-items-center">
                                    <div className="col-md-6">
                                            <label htmlFor="formCliente">Ingrese documento</label>
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    name="cliente"
                                                    id="formCliente"
                                                    className="form-control"
                                                    onChange={handleInputChange}
                                                />
                                                <div className="input-group-append">
                                                    <button type="submit" id="btnBuscar">Buscar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <section>
                                    <ul className="listado-datos">
                                        <li>Tipo documento: {form.tipoDocumento}</li>
                                        <li>Numero de documento: {form.numeroDocumento}</li>                                        
                                        <li>Nombre:{form.Nombre}</li>
                                        <li>Apellido:{form.Apellido}</li>
                                        <li>Celular:{form.Celular}</li>
                                        <li>Telefono:{form.Telefono}</li>
                                        <li>Email:{form.Email}</li>
                                        <li>Fecha de Nacimiento:{form.FechaNacimiento}</li>
                                    </ul>
                                <section className="container-botonRegistro text-center row">
                                   <div className="col-md-4 mb-4">
                                   <button type="submit" id="nuevaBusqueda">
                                    Nueva busqueda
                                   </button>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <button type="submit" id="seleccionar">Seleccionar</button>
                                </div>
                                </section>
                                </section>
                                </div>
                        </section>
                {/* Sección registrar clientes */}
                   <section>
                           <h4 className="titulo-opciones mb-4" id="mostrarRegistrarCliente" onClick={handleRegistrarClienteClick}>
                            Registrar cliente              
                           </h4>
                           <div className={`contenedorDesplegable ${registrarClienteVisible ? 'visible' : ''}`} id="contenedorRegistrar">
                           <p className="parrafo-title ml-md-5 mb-4 d-md-inline">
                              * Campos obligatorios
                          </p>
                             <div className="container mb-3 mt-3">
                               <div className="row">
                                 <div className="col-md-6">
                                   <form className="registroCliente">                                   
                   {/*Fieldset permite separar los formularios por secciones */}
                      <fieldset className="left-form">
                        {/* Etiquetas y campos de formulario para el ingreso de la información según el tipo de dato */}
                        <div className="form-group">
                          <label htmlFor="nombre" className="texto-formulario"
                            >* Nombre</label
                          >
                          <input
                            type="text"
                            id="nombre"
                            name="nombre-cliente"
                            className="form-control"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="apellido" className="texto-formulario"
                            >* Apellido</label
                          >
                          <input
                            type="text"
                            id="apellido"
                            name="apellido-cliente"
                            className="form-control"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="fechaNac" className="texto-formulario"
                            >* Fecha Nacimiento</label
                          >
                          <input
                            type="date"
                            id="fechaNac"
                            name="fecha-nacimiento"
                            required
                            className="form-control"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email" className="texto-formulario"
                            >* Email</label
                          >
                          <input
                           type="email"
                           id="email"
                           name="correo"
                           className="form-control"
                           autocomplete="onew-passwordff"
                           onChange={handleInputChange}
                          />
                        </div>
                      </fieldset>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <form className="registroCliente">
                      <fieldset className="right-form">
                        {/* select permite obtener una lista de seleccion de datos, para el tipo de documento*/}
                        <div className="form-group">
                          <label htmlFor="tipoDocumento" className="texto-formulario"
                            >* Seleccione</label
                          >
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
                          <label htmlFor="numeroDocumento" className="texto-formulario"
                            >* Documento</label>
                          <input
                            type="text"
                            id="numeroDocumento"
                            name="numero-documento"
                            className="form-control"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="numeroCelular" className="texto-formulario"
                            >* Celular</label>
                          <input
                            type="tel"
                            maxlength="10"
                            id="numeroCelular"
                            name="numero-celular"
                            className="form-control"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="numeroTelefono" className="texto-formulario"
                            >Telefono</label>
                          <input
                            type="tel"
                            maxlength="10"
                            id="numeroTelefono"
                            name="numero-telefono"
                            className="form-control"
                            onChange={handleInputChange}
                          />
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
              <section className="mb-3">
                <div className="d-flex justify-content-end">
                    <button type="submit" id="btnCrear" className="float-right">Crear</button>
                </div>
              </section>
            </div>
          </section>                 
                        <section>
                            <h4 className="titulo-opciones mb-4" id="mostrarIngresarDatos" onClick={handleIngresarDatosClick}>
                                Ingresar datos
                            </h4>
                            <div className={`contenedorDesplegable ${ingresarDatosVisible ? 'visible' : ''}`} id="contenedorIngresarDatos">
                                <form id="ingreso-reserva" className="formulario">
                                <label className="texto-formulario">* Fecha de ingreso</label>
                        <input
                            type="date"
                            id="fechaIngreso"
                            name="fecha-ingreso"
                            value={fechaIngreso}
                            onChange={handleFechaIngresoChange}
                        />
                        <label className="texto-formulario">* Fecha de salida</label>
                        <input
                            type="date"
                            id="fechaSalida"
                            name="fecha-salida"
                            value={fechaSalida}
                            onChange={handleFechaSalidaChange}
                        />
                        <label className="texto-formulario">Cantidad de días</label>
                        <input
                            type="number"
                            id="cantidadDias"
                            name="cantidad-dias"
                            value={cantidadDias}
                            onChange={handleCantidadDiasChange}
                        />                                
                            </form>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <footer>
                <section className="container d-flex justify-content-end align-items-center">
                    {/* ... (existing code) */}
                </section>
                <Link to="/">
                    <button type="submit" id="btnMenuPrincipal">Menu Principal</button>
                </Link>
                <div className="col-md-4 mb-4">
                    <button type="submit" id="btnCrear" className="btnContinuar">
                    Continuar
                    </button>
                </div>
            </footer>
        </div>
    );
}

export { RegistroDatos };