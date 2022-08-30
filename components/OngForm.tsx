import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify'
import { CREATE_DATO } from "../operations/mutations/DatoMutations";

import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from "next/router";
import { CREATE_ONG } from "../operations/mutations/OngMutations";

const OngForm = ({}) => {

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
    const [vision, setVision] = useState('')
    const [contacto, setContacto] = useState('')
    const [youtube, setYoutube] = useState('')

    const [createOng, { error, data, loading }] = useMutation(CREATE_ONG)

    const [createDato, { error: datoError, data: datoData, loading: datoLoading}] = useMutation(CREATE_DATO)

    const router = useRouter()

    const saveDatos = async (ongId: any) => {
        try {
            const datos = [email, telefono, paginaWeb, facebook, instagram, twitter, fax, youtube]
            datos.map(async(d, id) => {
                if (d) {
                    await createDato ({
                        variables: {
                            nombre: d,
                            ong_id  : ongId,
                            catalogo_dato_id: (id+1)
                        }
                    })
                }
            })
        } catch (err) {
            toast.error('Error, intentelo de nuevo')
        }
    }

    const saveOng = async () => {
        try {
            const ong = await createOng({
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
                    vision: vision
                        ? vision
                        : null,
                    contacto: contacto
                        ? contacto
                        : null
                }
            })
            if (ong) {
                await saveDatos(ong.data.createOng.id)
            }
            toast.success('Organización creada')
            setTimeout(() => {
                router.push('organizaciones-relacionadas')
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
                        <p className='font-semibold text-gray'>Visión</p>
                        <textarea 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white focus:outline-none' 
                            value={vision}
                            onChange={event => {setVision(event.target.value)}}
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
                            type='text' 
                            value={telefono}
                            onChange={event => {setTelefono(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Pagina Web</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white' 
                            type='url' 
                            value={paginaWeb}
                            onChange={event => {setPaginaWeb(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Facebook</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white' 
                            type='url' 
                            value={facebook}
                            onChange={event => {setFacebook(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Instagram</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white' 
                            type='url' 
                            value={instagram}
                            onChange={event => {setInstagram(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>Twitter</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white' 
                            type='url' 
                            value={twitter}
                            onChange={event => {setTwitter(event.target.value)}}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <p className='font-semibold text-gray'>YouTube</p>
                        <input 
                            className='w-64 shadow drop-shadow p-1 shadow-primary border-primary bg-solid-white' 
                            type='url' 
                            value={youtube}
                            onChange={event => {setYoutube(event.target.value)}}
                        />
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-center">
                    <button
                        type="button"
                        className="w-3/4 mt-8 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-gray focus:outline-none focus:ring-offset-2 sm:ml-3 sm:text-sm"
                        onClick={() => saveOng()}
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div> 
    )
}

export default OngForm