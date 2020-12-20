import { useAuth } from "@/lib/auth";
import React from "react";
import {
  Box,
  Button,
  Code,
  Flex,
  Heading,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { FireIcon } from "@/styles/icons/fire";
import Head from "next/head";
import { GithubIcon } from "@/styles/icons/github";
import { GoogleIcon } from "@/styles/icons/google";

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
          <Stack>
            <Button
              variant="solid"
              size="lg"
              color="#ffffff"
              fontWeight="medium"
              backgroundColor="#282828"
              _hover={{ bg: "gray.700" }}
              _active={{ bg: "gray.800" }}
              leftIcon={<GithubIcon boxSize={6} />}
              onClick={() => auth.signinWithGitHub()}
            >
              Sign in with Github
            </Button>
            <Button
              backgroundColor="white"
              color="gray.900"
              variant="outline"
              size="lg"
              fontWeight="medium"
              _hover={{ bg: "gray.100" }}
              leftIcon={<GoogleIcon boxSize={6} />}
              onClick={() => auth.signinWithGoogle()}
            >
              Sign in with Google
            </Button>
          </Stack>
        )}
      </Box>
    </Flex>
  );
};

export default Home;
