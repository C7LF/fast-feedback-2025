import { AddIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import AddSiteModal from "./add-site-modal";

export const SiteTableHeader = () => (
  <>
    <Flex justifyContent="space-between" alignItems="center">
      <Box>
        <Breadcrumb>
          <BreadcrumbItem m={0} pl={0} color="#060606">
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading color="#1a1a1a" size="2xl">
          My Sites
        </Heading>
      </Box>
      <AddSiteModal icon={<AddIcon boxSize={3} />} text="Add site" />
    </Flex>
  </>
);
