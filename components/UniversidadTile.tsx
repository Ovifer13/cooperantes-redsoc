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
    

    console.log(datos)
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
        <div className='grid grid-cols-1 gap-1 drop-shadow-2xl rounded-2xl px-6 py-6 mb-5s bg-solid-white truncate'>
            <div className=''>
                { nombre }
            </div>
            <div className=''>
                { siglas }
            </div>
            <div className=''>
                { facultad }
            </div>
            <div className=''>
                { escuela }
            </div>
            <div className=''>
                { contacto }
            </div>
            <div className=''>
                { cargo }
            </div>
            <div className=''>
                { telefono ? telefono : 'N/A' }
            </div>
            <div className=''>
                { email ? email : 'N/A' }
            </div>
        </div>
    )
}

export default UniversidadTile