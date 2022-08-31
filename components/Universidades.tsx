import { useQuery } from '@apollo/client'
import { GET_UNIVERSIDADES } from '../operations/queries/UniversidadQueries'
import { getUniversidades, universidad } from '../interfaces/UniversidadInterfaces'
import UniversidadTile from './UniversidadTile'

const Universidades = () => {

    const { error, data, loading } = useQuery<getUniversidades>(
        GET_UNIVERSIDADES, {
            fetchPolicy: 'network-only',
            nextFetchPolicy: 'cache-and-network'
        }
    )
    
    if (error || loading) (
        <>
            ...
        </>
    )
    
    const universidades: any = data?.fetchUniversidades

    const renderUniversidades = (universidades: universidad[]) => {
        try {
            return universidades.map((universidad: any, idx: any) => {
                const datos = universidad.datos
                return (
                    <div key={idx}>
                        <UniversidadTile 
                            id={universidad.id}
                            nombre={universidad.nombre}
                            cargo={universidad.cargo}
                            contacto={universidad.contacto}
                            escuela={universidad.escuela}
                            facultad={universidad.facultad}
                            siglas={universidad.siglas}
                            datos={datos}
                        />
                    </div>
                )
            })
        } catch(err) {
            return (
                loading
            )
        }
    }

    return (
        <div className='Universidades mx-20'>
            <div className='my-12'>
                <h1 className='text-center text-2xl font-bold mt-15 text-primary'>
                    { 'Contactos Universidades' }
                </h1>
            </div>
            <div className='grid grid-rows-1 gap-5'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {renderUniversidades(universidades)}
                </div>
            </div>
        </div>
    )

}

export default Universidades