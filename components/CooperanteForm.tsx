import React, { useState } from "react";

const CooperanteForm = ({}) => {

    const [nombre, setNombre] = useState('')
    const [siglas, setSiglas] = useState('')
    const [mision, setMision] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [paginaWeb, setPaginaWeb] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [twitter, setTwitter] = useState('')
    const [direccion, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [pais, setPais] = useState('')

    const saveCooperante = () => {
        console.log('salvar')
    }

    return (
        <div className="grid grid-cols-4">
            <div className='col-span-2 col-start-2 shadow drop-shadow shadow-primary px-6 py-6 rounded-2xl bg-solid-white'>
                <div className="grid grid-cols-1 gap-8 mt-2">
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Nombre</p> 
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary' 
                            type='text' 
                            value={nombre}
                            onChange={event => {setNombre(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Siglas</p> 
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary' 
                            type='text' 
                            value={siglas}
                            onChange={event => {setSiglas(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Mision</p>
                        <textarea 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary' 
                            value={mision}
                            onChange={event => {setMision(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Teléfono</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary' 
                            type='text' 
                            value={telefono}
                            onChange={event => {setTelefono(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Email</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary' 
                            type='email' 
                            value={email}
                            onChange={event => {setEmail(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Pagina Web</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary' 
                            type='url' 
                            value={paginaWeb}
                            onChange={event => {setPaginaWeb(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Facebook</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary' 
                            type='url' 
                            value={facebook}
                            onChange={event => {setFacebook(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Instagram</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary' 
                            type='url' 
                            value={instagram}
                            onChange={event => {setInstagram(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Twitter</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary' 
                            type='url' 
                            value={twitter}
                            onChange={event => {setTwitter(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Dirección</p>
                        <textarea 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary' 
                            value={direccion}
                            onChange={event => {setDireccion(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Ciudad</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary' 
                            type='text' 
                            value={ciudad}
                            onChange={event => {setCiudad(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>País</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary' 
                            type='text' 
                            value={pais}
                            onChange={event => {setPais(event.target.value)}}
                        />
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-center">
                    <button
                        type="button"
                        className="w-3/4 mt-8 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-gray focus:outline-none focus:ring-offset-2 sm:ml-3 sm:text-sm"
                        onClick={() => saveCooperante()}
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div> 
    )
}

export default CooperanteForm