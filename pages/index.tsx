import type { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from '@apollo/client'

import { GetTestData } from '../interfaces/TestInterfaces'

import { GET_TEST } from '../operations/queries/TestQueries'
import Section from '../components/Section'
import Hero from '../components/Hero'
import { FAV_ICON } from '../constants'
import { COOPERANTES_REDSOC } from '../constants/strings'

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
                <title>{COOPERANTES_REDSOC}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel='icon' href={FAV_ICON}></link>
            </Head>
            <Section>
                <Hero />
            </Section>
        </h1>
    )
}

export default Home
