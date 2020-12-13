import { useAuth } from "@/lib/auth";
import React from "react";
import { Box, Button, Code, Flex, Heading, Icon } from "@chakra-ui/react";
import { FireIcon } from "@/styles/icons/fire";
import Head from "next/head";

const Home: React.FunctionComponent = () => {
  const auth = useAuth();
  const { user } = auth;

  return (
    <Flex
      flexDir="column"
      justify="center"
      align="center"
      textAlign="center"
      alignItems="center"
      height="100vh"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        `,
          }}
        />
      </Head>
      <FireIcon boxSize={100} />
      <Heading>Fast Feedback</Heading>

      <p>
        Get started by editing <Code>{user && user.name}</Code>
      </p>
      <Box mt="5">
        {user ? (
          <Button
            colorScheme="red"
            variant="outline"
            onClick={() => auth.signout()}
          >
            Sign Out
          </Button>
        ) : (
          <Button
            colorScheme="red"
            variant="solid"
            onClick={() => auth.signinWithGitHub()}
          >
            Sign In
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default Home;
