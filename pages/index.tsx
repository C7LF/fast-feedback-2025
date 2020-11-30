import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useAuth } from '../lib/auth'

const Home: React.FunctionComponent = () => {
  const auth = useAuth()
  const { user } = auth

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fast Feedback
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <button onClick={() => auth.signinWithGitHub()}>Sign In</button>
        {user && (
          <button onClick={() => auth.signout()}>Sign Out</button>
        )}

        <div>
          {user && user.email}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home
