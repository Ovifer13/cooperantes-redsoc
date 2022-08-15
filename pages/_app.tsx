import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo-client'

import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <div className=''>
                <div>
                    <Component {...pageProps} />
                </div>
            </div>
        </ApolloProvider>
    )
}

export default MyApp