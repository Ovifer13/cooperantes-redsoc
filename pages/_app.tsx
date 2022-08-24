import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo-client'
import Head from 'next/head'

import '../styles/index.scss'
import Layout from '../components/Layout'
import { FAV_ICON } from '../constants'
import { COOPERANTES_REDSOC } from '../constants/strings'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Head>
                <title>{COOPERANTES_REDSOC}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel='icon' href={FAV_ICON}></link>
            </Head>
            <Layout>
                <div className="font-['Arial']">
                    <div>
                        <Component {...pageProps} />
                    </div>
                </div>
            </Layout>
        </ApolloProvider>
    )
}

export default MyApp
