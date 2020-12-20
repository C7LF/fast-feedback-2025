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

export const FeedbackTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem m={0} pl={0} color="#060606">
        <BreadcrumbLink>Feedback</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Heading color="#1a1a1a" size="2xl">
      My Feedback
    </Heading>
  </>
);
