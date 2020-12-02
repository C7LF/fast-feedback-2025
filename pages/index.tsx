import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useAuth } from "@/lib/auth";
import React from "react";
import { Button, Code, Heading } from "@chakra-ui/react";

const Home: React.FunctionComponent = () => {
  const auth = useAuth();
  const { user } = auth;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Heading>Fast Feedback</Heading>

        <p>
          Get started by editing{" "}
          <Code>{user && user.name}</Code>
        </p>
        
        {user ? (
          <Button onClick={() => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={() => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
