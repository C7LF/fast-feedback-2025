import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import DashboardShell from "./dashboard-shell";

const EmptyState: React.FunctionComponent = () => {
  return (
    <DashboardShell>
      <Box pt={50} pb={50} backgroundColor="whiteAlpha.500" mt={5} textAlign="center">
        <Heading color="#1a1a1a" size="lg">
          You haven't added any sites.
        </Heading>
        <Text color="#222222" pt={15} pb={25}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Button
          variant="solid"
          size="md"
          color="#ffffff"
          fontWeight="bold"
          backgroundColor="#282828"
        >
          Add site
        </Button>
      </Box>
    </DashboardShell>
  );
};

export default EmptyState;
