import React from "react";
import { Box, Link, Skeleton } from "@chakra-ui/react";
import { Table, Tr, Th, Td } from "./table";
import { format, parseISO } from "date-fns";

const SiteTable = ({ sites }) => {
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
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
          </Tr>
        </thead>
        <tbody>
          {sites.map((site) => (
            <Box as="tr" key={site.id}>
              <Td fontWeight="medium">{site.name}</Td>
              <Td>{site.url}</Td>
              <Td>
                <Link>View Feedback</Link>
              </Td>
              <Td>{format(parseISO(site.createdAt), "PPpp")}</Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default SiteTable;