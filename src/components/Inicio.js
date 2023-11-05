import React from 'react';
import { Logo } from './Logo';
import { Titulo } from './Titulo';
import { BtnOpciones } from './BtnOpciones';
import { Link } from 'react-router-dom';


function Inicio() {
    const linkStyles = {
        textDecoration: 'none', // Quital el subrayado
        color: 'inherit', // Mantiene el color de texto predeterminado
      };
    return (
        <div>
            <Logo />
            <Titulo
                name={"Inicio"}
            />
            <Link to="/empleados" style={linkStyles}>
                <BtnOpciones
                    name={"Registro de empleados"}

                />
            </Link>
            <Link to="/" style={linkStyles}>
                <BtnOpciones
                    name={"name"}
                />
            </Link>
            <Link to="/" style={linkStyles}>
                <BtnOpciones
                    name={"name"}
                />
            </Link>

        </div>
    )
}

export { Inicio }