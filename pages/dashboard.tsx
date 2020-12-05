import { useAuth } from "@/lib/auth";
import React from "react";
import { Box, Button, Code, Flex, Heading, Icon } from "@chakra-ui/react";
import { FireIcon } from "@/styles/icons/fire";
import EmptyState from "@/components/empty-state";

const Dashboard = () => {
  const auth = useAuth();
  const { user } = auth;

  if (!user) return "Loading...";

  return <EmptyState />;
};

export default Dashboard;
