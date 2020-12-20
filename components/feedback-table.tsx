import React from "react";
import { Box, Code, IconButton, Switch } from "@chakra-ui/react";
import { Table, Tr, Th, Td } from "./table";
import { DeleteIcon } from "@chakra-ui/icons";
import { RemoveButton } from "./remove-button";

const FeedbackTable = ({ allFeedback }) => {
  return (
    <Box
      mt={35}
      mb={35}
      backgroundColor="whiteAlpha.500"
      textAlign="center"
      width="100%"
    >
      <Table w="100%">
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Feedback</Th>
            <Th>Route</Th>
            <Th>Visible</Th>
            <Th>{""}</Th>
          </Tr>
        </thead>
        <tbody>
          {allFeedback.map((feedback) => (
            <Box as="tr" key={feedback.id}>
              <Td fontWeight="medium">{feedback.author}</Td>
              <Td>{feedback.text}</Td>
              <Td>
                <Code>{"/"}</Code>
              </Td>
              <Td>
                <Switch
                  defaultIsChecked={feedback.status === "active"}
                  size="md"
                />
              </Td>
              <Td>
                <RemoveButton feedbackId={feedback.id} />
              </Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default FeedbackTable;
