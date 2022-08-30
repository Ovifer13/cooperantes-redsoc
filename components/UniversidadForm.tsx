import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify'
import { CREATE_DATO } from "../operations/mutations/DatoMutations";
import { CREATE_UNIVERSIDAD } from "../operations/mutations/UniversidadMutations";

import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from "next/router";

const UniversidadForm = ({}) => {

    const [nombre, setNombre] = useState('')
    const [siglas, setSiglas] = useState('')
    const [facultad, setFacultad] = useState('')
    const [escuela, setEscuela] = useState('')
    const [contacto, setContacto] = useState('')
    const [cargo, setCargo] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    const [createUniversidad, { error, data, loading }] = useMutation(CREATE_UNIVERSIDAD)

    const [createDato, { error: datoError, data: datoData, loading: datoLoading}] = useMutation(CREATE_DATO)

    const router = useRouter()

    const saveDatos = async (universidadId: any) => {
        try {
            const datos = [email, telefono]
            datos.map(async(d, id) => {
                if (d) {
                    await createDato ({
                        variables: {
                            nombre: d,
                            universidad_id: universidadId,
                            catalogo_dato_id: (id+1)
                        }
                    })
                }
            })
        } catch (err) {
            toast.error('Error, intentelo de nuevo')
        }
    }

    const saveUniversidad = async () => {
        try {
            const universidad = await createUniversidad({
                variables: {
                    nombre: nombre
                        ? nombre
                        : null,
                    siglas: siglas
                        ? siglas
                        : null,
                    facultad: facultad
                        ? facultad
                        : null,
                    escuela: escuela
                        ? escuela
                        : null,
                    contacto: contacto
                        ? contacto
                        : null,
                    cargo: cargo
                        ? cargo
                        : null
                }
            })
            if (universidad) {
                await saveDatos(universidad.data.createUniversidad.id)
            }
            toast.success('Contacto creado')
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
                        <p className='font-semibold text-gray'>Facultad</p> 
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='text' 
                            value={facultad}
                            onChange={event => {setFacultad(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Escuela</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='text' 
                            value={escuela}
                            onChange={event => {setEscuela(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Contacto</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='text' 
                            value={contacto}
                            onChange={event => {setContacto(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Cargo</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='text' 
                            value={cargo}
                            onChange={event => {setCargo(event.target.value)}}
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
                        <p className='font-semibold text-gray'>Teléfono</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            type='tel' 
                            value={telefono}
                            onChange={event => {setTelefono(event.target.value)}}
                        />
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-center">
                    <button
                        type="button"
                        className="w-3/4 mt-8 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-gray focus:outline-none focus:ring-offset-2 sm:ml-3 sm:text-sm"
                        onClick={() => saveUniversidad()}
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div> 
    )
}

export default UniversidadForm