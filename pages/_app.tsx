import '../styles/globals.css'
import { AuthProvider } from '../lib/auth'
import type { AppProps } from 'next/app'

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps}></Component>
    </AuthProvider>
  )
}

export default MyApp
