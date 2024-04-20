import React from 'react'
import { Logo } from './Logo'
import { Titulo } from './Titulo'
import { useState, useEffect } from 'react';
import "../styles/ListadoClientes.css";
import { Link } from 'react-router-dom';

function ListadoClientes() {
    const [form, setForm] = useState([{
        nombre: "",
        apellido: "",
        direccion: "",
        correo_electronico: "",
        numero_documento: "",
        telefono: "",
        id_tipo_documento: "",
        id_documento: "",
    }]);

    useEffect(() => {
        fetch(`http://localhost:80/API/`)
            .then((response) => response.json())
            .then((data) => {
                setForm(data);
            })
            .catch((error) => console.error("Error obteniendo cliente:", error));
    }, [])

    const convertirTipoDocumento = (idTipoDocumento) => {
        switch (idTipoDocumento) {
            case "1":
                return "Cédula de Ciudadanía";
            case "2":
                return "Pasaporte";
            case "3":
                return "Cédula de Extranjería";
            default:
                return "Tipo de Documento Desconocido";
        }
    }

    return (
        <>
            <Logo />
            <Titulo name={"Listado de Clientes"} />
            {form.map((usuario, index) => (
                <div key={String(usuario.id_cliente)} className='containerCard'>
                    <div className='cardHeader'>
                        <h4 className='titleClient'>Usuario {index + 1}</h4>
                    </div>
                    <ul className='listContainer'>
                        <li> <strong>Tipo de Documento:</strong> {convertirTipoDocumento(usuario.id_tipo_documento)}</li>
                        <li> <strong>Número de Documento: </strong>{usuario.numero_documento}</li>
                        <li> <strong>Nombre: </strong>{usuario.nombre}</li>
                        <li> <strong>Apellido: </strong>{usuario.apellido}</li>
                        <li> <strong>Dirección: </strong>{usuario.direccion}</li>
                        <li> <strong>Correo Electrónico: </strong>{usuario.correo_electronico}</li>
                        <li> <strong>Teléfono: </strong>{usuario.telefono}</li>
                    </ul>
                </div>
            ))}
            <section className=" container d-flex justify-content-center align-items-center">
                <Link to="/">
                    <button type="submit" id="btnMenuPrincipal">
                        Menu Principal
                    </button>
                </Link>
            </section>
        </>
    )
}

export { ListadoClientes }