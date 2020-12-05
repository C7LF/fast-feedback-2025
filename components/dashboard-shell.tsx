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

const DashboardShell: React.FunctionComponent = ({ children }) => (
  <Flex flexDirection="column" width="100%" color="#3e3e3e">
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
          <FireIcon />
          <Link>Feedback</Link>
          <Link display="flex">Sites</Link>
        </Stack>
        <Stack
          spacing={5}
          alignItems="center"
          isInline
          justifyContent="flex-start"
        >
          <Link>Account</Link>
          <Avatar size="sm" />
        </Stack>
      </Box>
    </Flex>
    <Flex
      color="whiteAlpha.500"
      backgroundColor="gray.200"
      alignItems="center"
      justifyContent="center"
      pt={35}
      pb={35}
    >
      <Box maxWidth="1140px" width="100%">
        <Breadcrumb>
          <BreadcrumbItem m={0} pl={0} color="#060606">
            <BreadcrumbLink color="#2c2c2c">Sites</BreadcrumbLink>
          </BreadcrumbItem>
          <Heading color="#1a1a1a" size="2xl">
            Sites
          </Heading>
          {children}
        </Breadcrumb>
      </Box>
    </Flex>
  </Flex>
);
export default DashboardShell;
