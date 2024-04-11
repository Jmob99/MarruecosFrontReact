import React, { useEffect, useState } from "react";
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

 

  const creacionCliente = () => {
   
    fetch('http://localhost/API/index.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form) 
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al crear cliente');
      }
      return response.json();
    })
    .then(data => {
      console.log('Cliente creado:', data);
      alert('Cliente creado exitosamente')
    })
    .catch(error => {
      console.error('Error al crear cliente:', error);
    });
  };

  const obtenerCliente = () =>{
    fetch(`http://localhost/API/index.php?id_cliente=${form.numero_cedula}`)
    .then((response) => response.json())
    .then((data) => setForm(data))
    .catch((error) => console.error('Error obteniendo cliente:', error));
  }
  
  const actualizarCliente = () => {
    fetch(`http://localhost/API/index.php?id_cliente=${form.id_cliente}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al actualizar cliente');
      }
      return response.json();
    })
    .then(data => {
      console.log('Cliente actualizado:', data);
      alert('El cliente ha sido actualizado exitosamente');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  const eliminarCliente = () => {
    fetch(`http://localhost/API/index.php?id_cliente=${form.id_cliente}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al eliminar cliente');
      }
      return response.json();
    })
    .then(data => {
      console.log('Cliente eliminado:', data);
      alert('El cliente ha sido eliminado exitosamente');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  useEffect(() => {
    fetch('http://localhost/API/index.php')
    .then((response) => response.json())
    .then((data) => setForm(data))
  }, [])
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
          <button type="submit" id="btnBuscarR" onClick={obtenerCliente}>
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
          <button type="submit" id="btnEliminar" onClick={eliminarCliente}>
            Eliminar
          </button>
        </div>
        <div className="col-md-4 mb-4">
          <button type="submit" id="btnModificar" onClick={actualizarCliente}>
            Modificar
          </button>
        </div>
        <div className="col-md-4 mb-4">
          <button type="submit" id="btnCrearR" onClick={creacionCliente}>
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
