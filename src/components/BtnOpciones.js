import React from 'react'
import '../styles/BtnOpciones.css'

function BtnOpciones(props) {
    return (
        <div className="d-flex flex-column align-items-center mt-4">
            <input
                type="button"
                value={props.name}
                id="btn_opt"
                className="mb-4"
            />
        </div>
    )
}

export { BtnOpciones }