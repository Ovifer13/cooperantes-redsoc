import React from 'react'


interface UniversidadTileProps {
    nombre: string,
    cargo: string,
    contacto: string,
    escuela: string,
    siglas: string,
    facultad: string
}

const UniversidadTile = ({
    nombre,
    cargo,
    contacto,
    escuela,
    siglas,
    facultad
}: UniversidadTileProps) => {
    return (
        <div className='grid grid-cols-4 gap-4 box-border border-1 my-10 px-6 py-6 bg-solid-white'>
            <div className=''>
                { nombre }
            </div>
            <div className=''>
                { cargo }
            </div>
            <div className=''>
                {  }
            </div>
        </div>
    )
}

export default UniversidadTile