import React from 'react';
import { Logo } from './Logo';
import { Titulo } from './Titulo';
import { BtnOpciones } from './BtnOpciones';
import { Link } from 'react-router-dom';


function Inicio() {
    return (
        <div>
            <Logo />
            <Titulo
                name={"Inicio"}
            />
            <Link to="/empleados">
                <BtnOpciones
                    name={"Registro de empleados"}
                />
            </Link>
            <Link to="/">
                <BtnOpciones
                    name={"name"}
                />
            </Link>
            <Link to="/">
                <BtnOpciones
                    name={"name"}
                />
            </Link>

        </div>
    )
}

export { Inicio }