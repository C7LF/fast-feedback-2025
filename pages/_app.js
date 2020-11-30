import '../styles/globals.css'
import { AuthProvider } from '../lib/auth'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps}></Component>
    </AuthProvider>
  )
}

export default MyApp
