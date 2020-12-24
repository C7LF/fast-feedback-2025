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
  Text,
} from "@chakra-ui/react";
import { FireIcon } from "@/styles/icons/fire";
import Head from "next/head";
import { GithubIcon } from "@/styles/icons/github";
import { GoogleIcon } from "@/styles/icons/google";
import Feedback from "@/components/feedback";
import { getAllFeedback } from "@/lib/db-admin";

const SITE_ID = "LcHL46G8bW0EDFJLIHOp";

export async function getStaticProps(context) {
  const { feedback } = await getAllFeedback(SITE_ID);
  //const { site } = await getSite(SITE_ID);

  return {
    props: {
      allFeedback: feedback,
    },
    revalidate: 1,
  };
}

const Home: React.FunctionComponent<any> = ({ allFeedback }) => {
  const auth = useAuth();

  return (
    <>
      <Box bg="gray.100" py={16} px={4}>
        <Flex as="main" direction="column" maxW="700px" margin="0 auto">
          <Head>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/sites"
              }
            `,
              }}
            />
          </Head>
          <FireIcon boxSize={100} />
          <Text mb={4} fontSize="lg" py={4}>
            <Text as="span" fontWeight="bold" display="inline">
              Fast Feedback
            </Text>
            {`. It's the easiest way to add comments or reviews to your static site. Try it out by leaving a comment below. After the comment is approved, it will display below.`}
          </Text>
          {auth.user ? (
            <Button
              as="a"
              href="/sites"
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              mt={4}
              maxW="200px"
              _hover={{ bg: "gray.700" }}
              _active={{
                bg: "gray.800",
                transform: "scale(0.95)",
              }}
            >
              View Dashboard
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
        </Flex>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="full"
        maxWidth="700px"
        margin="0 auto"
        mt={8}
        px={4}
      >
        {/* <FeedbackLink paths={[SITE_ID]} /> */}
        {allFeedback.map((feedback, index) => (
          <Feedback
            key={feedback.id}
            isLast={index === allFeedback.length - 1}
            {...feedback}
          />
        ))}
      </Box>
    </>
  );
};

export default Home;
