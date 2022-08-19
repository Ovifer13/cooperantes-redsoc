import { useQuery } from '@apollo/client'
import { GET_ONGS } from '../operations/queries/OngQueries'
import { getOngs, ong } from '../interfaces/OngInterfaces'
import OngTile from './OngTile'

const Ongs = () => {

    const { error, data, loading } = useQuery<getOngs>(
        GET_ONGS
    )
    
    if (error || loading) (
        <>
            ...
        </>
    )
    
    const ongs: any = data?.fetchOngs

    const renderOngs = (ongs: ong[]) => {
        try {
            return ongs.map((ong: any, idx: any) => {
                const datos = ong.datos
                return (
                    <div key={idx}>
                        <OngTile 
                            contacto={ong.contacto}
                            vision={ong.vision}
                            mision={ong.mision}
                            nombre={ong.nombre}
                            siglas={ong.siglas}
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
        <div className='Ong mx-20'>
            <div className='my-12'>
                <h1 className='text-center text-2xl font-bold mt-15 text-primary'>
                    { 'Contactos ONG' }
                </h1>
            </div>
            <div className='grid grid-rows-1 gap-5'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    {renderOngs(ongs)}
                </div>
            </div>
        </div>
    )

}

export default Ongs