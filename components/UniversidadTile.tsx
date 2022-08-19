import React, { useState } from 'react'
import { dato } from '../interfaces/DatoInterfaces'
import UniversidadModal from './UniversidadModal'

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

    const [open, setOpen] = useState(false)
    
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
            <div className='text-ellipsis overflow-hidden text-center'>
                { contacto }
            </div>
            <div className="bg-gray-50 px-4 py-3 text-center">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-10 py-2 bg-primary text-base font-medium text-white hover:bg-gray focus:outline-none focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(true)}
                  >
                    Expandir
                </button>
            </div>
            <UniversidadModal 
                open={open}
                setOpen={setOpen}
                nombre={nombre}
                siglas={siglas}
                telefono={telefono}
                email={email}
                cargo={cargo}
                contacto={contacto}
                escuela={escuela}
                facultad={facultad}
            />
        </div>
    )
}

export default UniversidadTile