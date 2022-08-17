import { useQuery } from '@apollo/client'
import { GET_UNIVERSIDADES } from '../operations/queries/UniversidadQueries'
import { getUniversidades, universidad } from '../interfaces/UniversidadInterfaces'
import UniversidadTile from './UniversidadTile'

const Universidades = () => {

    const { error, data, loading } = useQuery<getUniversidades>(
        GET_UNIVERSIDADES
    )
    
    if (error || loading) (
        <>
            ...
        </>
    )
    
    const universidades: any = data?.fetchUniversidades
    
    const renderUniversidades = (universidades: universidad[]) => {
        return universidades.map((universidad, idx) => {
            console.log(universidad)
            return (
                <div key={universidad.id}>
                    <UniversidadTile 
                        nombre={universidad.nombre}
                        cargo={universidad.cargo}
                        contacto={universidad.contacto}
                        escuela={universidad.escuela}
                        facultad={universidad.facultad}
                        siglas={universidad.siglas}
                    />
                </div>
            )
        })
    }

    return (
        <div className=''>
            {renderUniversidades(universidades)}
        </div>
    )

}

export default Universidades