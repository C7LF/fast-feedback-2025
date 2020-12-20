import React from "react";
import {
  ChakraProvider,
  Flex,
  Link,
  Box,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import { FireIcon } from "@/styles/icons/fire";
import { useAuth } from "@/lib/auth";
import AddSiteModal from "./add-site-modal";
import { AddIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const DashboardShell: React.FunctionComponent = ({ children }) => {
  const auth = useAuth();
  const { user } = auth;

  return (
    <Flex flexDirection="column" color="#3e3e3e" height="100vh">
      <Flex
        alignItems="center"
        backgroundColor="whiteAlpha.500"
        justifyContent="center"
        pt={5}
        pb={5}
      >
        <Box
          maxWidth="1140px"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            spacing={5}
            isInline
            alignItems="center"
            justifyContent="flex-start"
          >
            <FireIcon boxSize={8} />
            <NextLink href="/feedback" passHref>
              <Link display="flex">Feedback</Link>
            </NextLink>
            <NextLink href="/dashboard" passHref>
              <Link display="flex">Sites</Link>
            </NextLink>
          </Stack>
          <Stack
            spacing={5}
            alignItems="center"
            isInline
            justifyContent="flex-start"
          >
            {user && (
              <>
                <Link onClick={auth.signout}>Sign out</Link>
                <Avatar size="sm" src={user?.photoUrl} />
              </>
            )}
          </Stack>
        </Box>
      </Flex>
      <Flex
        color="whiteAlpha.500"
        backgroundColor="gray.200"
        justifyContent="center"
        pt={35}
        pb={35}
        height="100%"
      >
        <Box maxWidth="1140px" width="100%">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};
export default DashboardShell;
