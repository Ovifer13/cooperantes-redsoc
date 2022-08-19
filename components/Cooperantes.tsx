import { useQuery } from '@apollo/client'
import { GET_COOPERANTES } from '../operations/queries/CooperanteQueries'
import { getCooperantes, cooperante } from '../interfaces/CooperanteInterfaces'
import CooperanteTile from './CooperanteTile'

const Cooperantes = () => {

    const { error, data, loading } = useQuery<getCooperantes>(
        GET_COOPERANTES
    )
    
    if (error || loading) (
        <>
            ...
        </>
    )
    
    const cooperantes: any = data?.fetchCooperantes

    const renderCooperantes = (cooperantes: cooperante[]) => {
        try {
            return cooperantes.map((cooperante: any, idx: any) => {
                const datos = cooperante.datos
                return (
                    <div key={idx}>
                        <CooperanteTile 
                            ciudad={cooperante.ciudad}
                            direccion={cooperante.direccion}
                            mision={cooperante.mision}
                            nombre={cooperante.nombre}
                            pais={cooperante.pais}
                            siglas={cooperante.siglas}
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
        <div className='Cooperantes mx-20'>
            <div className='mb-12'>
                <h1 className='text-center text-2xl font-bold mt-15 text-primary'>
                    { 'Cooperantes internacionales' }
                </h1>
            </div>
            <div className='grid grid-rows-1 gap-5'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {renderCooperantes(cooperantes)}
                </div>
            </div>
        </div>
    )

}

export default Cooperantes