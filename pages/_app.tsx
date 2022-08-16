import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo-client'

import '../styles/index.scss'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Layout>
                <div className=''>
                    <div>
                        <Component {...pageProps} />
                    </div>
                </div>
            </Layout>
        </ApolloProvider>
    )
}

export default MyApp
