import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import AddCooperante from '../../components/AddCooperante'
import Section from '../../components/Section'

const AgregarPage: NextPage = () => {
    const router = useRouter()
    
    if (typeof window !== 'undefined') {
        const item = localStorage.getItem('admin')
        if (!item) {
            router.push('/')
        }
    }

    return (
        <Section>
            <AddCooperante />
        </Section>
    )
}

export default AgregarPage