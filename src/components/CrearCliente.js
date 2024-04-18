import React, { useState } from "react";
import "../styles/CrearCliente.css";
import { Titulo } from "./Titulo";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

function CrearCliente() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    correo_electronico: "",
    numero_documento: "",
    telefono: "",
  });

  const [tipoDocumentoSeleccionado, setTipoDocumentoSeleccionado] =
    useState("selectDocumento");

  const inputs = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const creacionCliente = () => {
    fetch("http://localhost:80/API/index.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        id_tipo_documento: tipoDocumentoSeleccionado
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al crear cliente");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Cliente creado:", data);
        alert("Cliente creado exitosamente");
        setForm({});
      })
      .catch((error) => {
        console.error("Error al crear cliente:", error);
      });
  };

  const obtenerCliente = (event) => {
    event.preventDefault();
    console.log(form);
    fetch(`http://localhost:80/API/?numero_documento=${form.cliente}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          alert('No se ha encontrado un cliente con la identificación suministrada')
        }
        console.log(data);
        setForm(data);
        setTipoDocumentoSeleccionado(data.id_tipo_documento);
      })
      .catch((error) => console.error("Error obteniendo cliente:", error));
  };

  const actualizarCliente = () => {
    fetch(`http://localhost:80/API/index.php?id_cliente=${form.id_cliente}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar cliente");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Cliente actualizado:", data);
        alert("El cliente ha sido actualizado exitosamente");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const eliminarCliente = () => {
    fetch(`http://localhost/API/index.php?id_cliente=${form.id_cliente}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar cliente");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Cliente eliminado:", data);
        alert("El cliente ha sido eliminado exitosamente");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
                    name="nombre"
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
                    name="apellido"
                    className="form-control"
                    onChange={inputs}
                    value={form.apellido}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="direccion" className="texto-formulario">
                    * Dirección
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    required
                    className="form-control"
                    onChange={inputs}
                    value={form.direccion}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="texto-formulario">
                    * Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="correo_electronico"
                    className="form-control"
                    autoComplete="on"
                    onChange={inputs}
                    value={form.correo_electronico}
                  />
                </div>
              </fieldset>
            </form>
          </div>
          <div className="col-md-6">
            <form className="registroCliente">
              <fieldset className="right-form">
                <div className="form-group">
                  <label htmlFor="id_tipo_documento" className="texto-formulario">
                    * Seleccione
                  </label>
                  <select
                    name="id_tipo_documento"
                    id="id_tipo_documento"
                    className="form-select"
                    value={tipoDocumentoSeleccionado}
                    onChange={(e) =>
                      setTipoDocumentoSeleccionado(e.target.value)

                    }
                  >
                    <option value="selectDocumento">Tipo de documento</option>
                    <option value="1">Cédula de Ciudadanía</option>
                    <option value="2">Pasaporte</option>
                    <option value="3">Cédula de Extranjería</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="numeroDocumento" className="texto-formulario">
                    * Documento
                  </label>
                  <input
                    type="text"
                    id="numeroDocumento"
                    name="numero_documento"
                    className="form-control"
                    onChange={inputs}
                    value={form.numero_documento}
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
                    name="telefono"
                    className="form-control"
                    onChange={inputs}
                    value={form.telefono}
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
                    name="codReserva"
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
