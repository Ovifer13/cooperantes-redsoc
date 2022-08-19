import React, { useState } from 'react'
import { dato } from '../interfaces/DatoInterfaces'
import OngModal from './OngModal'

interface OngTileProps {
    nombre: string,
    siglas: string,
    mision: string,
    vision: string,
    contacto: string,
    datos: dato[]
}

const OngTile = ({
    nombre,
    siglas,
    mision,
    vision,
    contacto,
    datos
}: OngTileProps) => {
    
    const [open, setOpen] = useState(false)
    
    let email: any
    const telefono:any = [] 
    let paginaWeb: any
    let facebook: any
    let instagram: any
    let twitter: any
    let youtube: any

    const getDatos = () => {
        return datos.map((d) => {
            const catalogoDatos = d.catalogoDatos[0].id
            if (catalogoDatos == 1) {
                email = d.nombre
            } else if (catalogoDatos == 2) {
                telefono.push(d.nombre)
            } else if (catalogoDatos == 3) {
                paginaWeb = d.nombre
            } else if (catalogoDatos == 4) {
                facebook = d.nombre
            } else if (catalogoDatos == 5) {
                instagram = d.nombre
            } else if (catalogoDatos == 6) {
                twitter = d.nombre
            } else if (catalogoDatos == 8) {
                youtube = d.nombre
            }
        })
    }

    const renderTelefonos = () => {
        return telefono.map((t: any, idx: any) => {
            const telefonos = []
            if (idx < (telefono.length - 1)) {
                telefonos.push(t + ' / ')
            } else {
                telefonos.push(t)
            }
            return (
                telefonos
            )
        })
    }

    getDatos()

    return (
        <div className='grid shadow grid-cols-1 gap-1 drop-shadow-2xl shadow-primary rounded-2xl px-6 py-6 mb-5s bg-solid-white truncate mb-10'>
            <div className='text-ellipsis overflow-hidden text-center font-semibold text-primary mb-2'>
                { nombre }
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
            <OngModal 
                open={open}
                setOpen={setOpen}
                nombre={nombre}
                siglas={siglas}
                mision={mision}
                vision={vision}
                telefono={telefono}
                email={email}
                paginaWeb={paginaWeb}
                facebook={facebook}
                instagram={instagram}
                twitter={twitter}
                contacto={contacto}
                youtube={youtube}
                renderTelefonos={renderTelefonos}
            />
        </div>
    )
}

export default OngTile