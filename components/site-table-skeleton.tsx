import { Box, Skeleton } from "@chakra-ui/react";
import React from "react";
import { Td, Table, Tr, Th } from "./table";

const SkeletonRow = ({ width }) => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
  </Box>
);

const SiteTableSkeleton = () => {
  return (
    <Box
      pt={50}
      pb={50}
      backgroundColor="whiteAlpha.500"
      mt={5}
      textAlign="center"
      width="100%"
    >
      <Table w="100%" >
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th>{""}</Th>
          </Tr>
        </thead>
        <tbody>
          <SkeletonRow width="75px" />
          <SkeletonRow width="125px" />
          <SkeletonRow width="50px" />
          <SkeletonRow width="100px" />
          <SkeletonRow width="75px" />
        </tbody>
      </Table>
    </Box>
  );
};

export default SiteTableSkeleton;