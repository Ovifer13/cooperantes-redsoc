import React, { useState } from 'react'
import CooperanteForm from './CooperanteForm'

const AddCooperante = ({}) => {

    const [selection, setSelection] = useState('')

    console.log(selection)

    return (
    <>
        <div className="w-1/3 content-center mx-auto mb-10">
            <select
            id="selection"
            name="selection"
            autoComplete="selection-name"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={event => {setSelection(event.target.value)}}
            >
                <option>Seleccione una opción</option>
                <option>Cooperante</option>
                <option>Contacto Universidad</option>
                <option>Organización</option>
            </select>
        </div>
        {selection == 'Cooperante'
            ? <CooperanteForm />
            : ''
        }
    </>
    )
}

export default AddCooperante