import React from 'react'
import { dato } from '../interfaces/DatoInterfaces'


interface UniversidadTileProps {
    nombre: string,
    cargo: string,
    contacto: string,
    escuela: string,
    siglas: string,
    facultad: string,
    datos: dato[]
}

const UniversidadTile = ({
    nombre,
    cargo,
    contacto,
    escuela,
    siglas,
    facultad,
    datos
}: UniversidadTileProps) => {
    
    let email: any
    let telefono: any 
    
    const getDatos = () => {
        return datos.map((d) => {
            const catalogoDatos = d.catalogoDatos[0].id
            if (catalogoDatos == 1) {
                email = d.nombre
            } else if (catalogoDatos == 2) {
                telefono = d.nombre
            }
        })
    }

    getDatos()

    return (
        <div className='grid shadow grid-cols-1 gap-1 drop-shadow-2xl shadow-primary rounded-2xl px-6 py-6 mb-5s bg-solid-white truncate mb-10'>
            <div className='text-ellipsis overflow-hidden text-center font-semibold text-primary mb-2'>
                { nombre }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Siglas</p>{ siglas }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Facultad</p>
                { facultad }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Escuela</p>
                { escuela }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Contacto</p>
                { contacto }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Cargo</p>
                { cargo }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Telefono</p>
                { telefono ? telefono : 'N/A' }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Email</p>
                { email ? email : 'N/A' }
            </div>
        </div>
    )
}

export default UniversidadTile