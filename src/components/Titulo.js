import React from 'react'
import '../styles/Titulo.css'
function Titulo(props) {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
        <h1 className='titulo-registroEmpleado'>
            {props.name}
        </h1>
    </div>
  )
}

export {Titulo}