import React from 'react'
import '../styles/RegistroEmpleado.css'
import { Titulo } from './Titulo'
import { Logo } from './Logo'

function RegistroEmpleados() {
    return (
        <div>
            <Logo />
            <Titulo
                name={"Registro de Empleados"}
            />
            <section className="container">
                <form className="form-registroEmpleado">
                    <div className="form-group">
                        <label htmlFor="usuario" id="label-usuario">Nombre de usuario</label>
                        <input type="text" id="usuario" className="form-control mb-3" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" id="label-email">Email</label>
                        <input type="email" id="email" className="form-control mb-3" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" id="label-password">Contraseña</label>
                        <input type="password" id="password" className="form-control mb-3" />
                    </div>
                    <div className="contraseña">
                        <input type="checkbox" id="checkbox" value="Mostrar contraseña" />
                        <label id="label" className='checkLabel'>Mostrar contraseña</label>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" id="btnMenuPrincipal">
                            Menu Principal
                        </button>
                        <button type="submit" id="btn-registro">Registrar</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export { RegistroEmpleados }