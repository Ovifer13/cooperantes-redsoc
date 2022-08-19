import React from 'react'
import { dato } from '../interfaces/DatoInterfaces'


interface CooperanteTileProps {
    nombre: string,
    siglas: string,
    mision: string,
    direccion: string,
    pais: string,
    ciudad: string,
    datos: dato[]
}

const CooperanteTile = ({
    nombre,
    siglas,
    mision,
    direccion,
    pais,
    ciudad,
    datos
}: CooperanteTileProps) => {
    
    let email: any
    const telefono:any = [] 
    let paginaWeb: any
    let facebook: any
    let instagram: any
    let twitter: any
    let fax: any

    
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
            } else if (catalogoDatos == 7) {
                fax = d.nombre
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
            <div className='text-ellipsis- overflow-hidden'>
                <p className='font-semibold text-gray'>Siglas</p> { siglas ? siglas : 'N/A' }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Mision</p> { mision ? mision : 'N/A' }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Telefono</p> 
                {telefono.length
                    ? renderTelefonos() 
                    : 'N/A'
                }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Fax</p>
                { fax ? fax : 'N/A' }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Email</p>
                { email ? email : 'N/A' }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Página Web</p>
                {paginaWeb
                    ? <a className='hover:font-bold hover:text-primary' href={paginaWeb}>{ paginaWeb ? paginaWeb : 'N/A' }</a>
                    : 'N/A'
                }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Facebook</p> 
                {facebook
                    ? <a className='hover:font-bold hover:text-primary' href={facebook}>{ facebook ? facebook : 'N/A' }</a>
                    : 'N/A'
                }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Instagram</p>
                {instagram
                    ? <a className='hover:font-bold hover:text-primary' href={instagram}>{ instagram ? instagram : 'N/A' }</a>
                    : 'N/A'
                }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Twitter</p> 
                {twitter
                    ? <a className='hover:font-bold hover:text-primary' href={twitter}>{ twitter }</a>
                    : 'N/A'
                }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Direccion</p> 
                { direccion }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Ciudad</p> 
                { ciudad }
            </div>
            <div className='text-ellipsis overflow-hidden'>
                <p className='font-semibold text-gray'>Pais</p> 
                { pais }
            </div>
        </div>
    )
}

export default CooperanteTile