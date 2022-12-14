import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify'
import { CREATE_COOPERANTE } from "../operations/mutations/CooperanteMutations";
import { CREATE_DATO } from "../operations/mutations/DatoMutations";

import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from "next/router";

const CooperanteForm = ({}) => {

    const [nombre, setNombre] = useState('')
    const [siglas, setSiglas] = useState('')
    const [mision, setMision] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fax, setFax] = useState('')
    const [email, setEmail] = useState('')
    const [paginaWeb, setPaginaWeb] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [twitter, setTwitter] = useState('')
    const [direccion, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [pais, setPais] = useState('')

    const [createCooperante, { error, data, loading }] = useMutation(CREATE_COOPERANTE)

    const [createDato, { error: datoError, data: datoData, loading: datoLoading}] = useMutation(CREATE_DATO)

    const router = useRouter()

    const saveDatos = async (cooperanteId: any) => {
        try {
            const datos = [email, telefono, paginaWeb, facebook, instagram, twitter, fax]
            datos.map(async(d, id) => {
                if (d) {
                    await createDato ({
                        variables: {
                            nombre: d,
                            cooperante_id: cooperanteId,
                            catalogo_dato_id: (id+1)
                        }
                    })
                }
            })
        } catch (err) {
            toast.error('Error, intentelo de nuevo')
        }
    }

    const saveCooperante = async () => {
        try {
            const cooperante = await createCooperante({
                variables: {
                    nombre: nombre
                        ? nombre
                        : null,
                    siglas: siglas
                        ? siglas
                        : null,
                    mision: mision
                        ? mision
                        : null,
                    direccion: direccion
                        ? direccion
                        : null,
                    pais: pais
                        ? pais
                        : null,
                    ciudad: ciudad
                        ? ciudad
                        : null
                }
            })
            if (cooperante) {
                await saveDatos(cooperante.data.createCooperante.id)
            }
            toast.success('Cooperante creado')
            setTimeout(() => {
                router.push('universidades')
            }, 2500)
        } catch (err) {
            toast.error('Error, intentelo de nuevo')
        }
    }

    return (
        <div className="grid grid-cols-4">
            <ToastContainer 
                position='bottom-center'
                autoClose={2000}
            />
            <div className='col-span-2 col-start-2 shadow drop-shadow shadow-primary px-6 py-6 rounded-2xl bg-solid-white'>
                <div className="grid grid-cols-1 gap-8 mt-2">
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Nombre</p> 
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='text' 
                            value={nombre}
                            onChange={event => {setNombre(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Siglas</p> 
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='text' 
                            value={siglas}
                            onChange={event => {setSiglas(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Mision</p>
                        <textarea 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            value={mision}
                            onChange={event => {setMision(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Tel??fono</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='text' 
                            value={telefono}
                            onChange={event => {setTelefono(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Fax</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='text' 
                            value={fax}
                            onChange={event => {setFax(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Email</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='email' 
                            value={email}
                            onChange={event => {setEmail(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Pagina Web</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='url' 
                            value={paginaWeb}
                            onChange={event => {setPaginaWeb(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Facebook</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='url' 
                            value={facebook}
                            onChange={event => {setFacebook(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Instagram</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='url' 
                            value={instagram}
                            onChange={event => {setInstagram(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Twitter</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='url' 
                            value={twitter}
                            onChange={event => {setTwitter(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Direcci??n</p>
                        <textarea 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            value={direccion}
                            onChange={event => {setDireccion(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Ciudad</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='text' 
                            value={ciudad}
                            onChange={event => {setCiudad(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Pa??s</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
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