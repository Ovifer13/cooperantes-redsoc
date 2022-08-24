import type { NextPage } from 'next'
import Admin from '../../components/Admin'
import Section from '../../components/Section'

const AdministracionPage: NextPage = () => {
    return (
        <div>
            <Section>
                <Admin />
            </Section>
        </div>
    )
}

export default AdministracionPage