import {
  Box,
  Flex,
  Heading,
  Icon,
  Code,
  Divider,
  Text,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import React from "react";

const Feedback = ({ author, text, createdAt, provider, isLast, settings }) => {
  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Heading size="sm" as="h3" mb={0} fontWeight="medium">
        {author}
      </Heading>
      <Text color="gray.500" mb={4} fontSize="xs">
        {format(parseISO(createdAt), "PPpp")}
      </Text>
      <Text>{text}</Text>
      <Divider borderColor="grey.200" />
    </Box>
  );
};

export default Feedback;
