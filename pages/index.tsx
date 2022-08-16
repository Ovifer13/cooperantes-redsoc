import type { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from '@apollo/client'

import { GetTestData } from '../interfaces/TestInterfaces'

import { GET_TEST } from '../operations/queries/TestQueries'
import Section from '../components/Section'
import Hero from '../components/Hero'

const Home: NextPage = () => {

    const { error, data, loading } = useQuery<GetTestData>(
        GET_TEST
    )
  
    const {
        getTest
    } = {...data}

    if (error || loading) (
        <>
        ...
        </>
    )

    return (
        <h1 className='text-3xl font-bold'>
            <Head>
                <title> Cooperanted Redsoc </title>
            </Head>
            <Section>
                <Hero />
            </Section>
        </h1>
    )
}

export default Home
