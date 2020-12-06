import { useAuth } from "@/lib/auth";
import React from "react";
import { Box, Button, Code, Flex, Heading, Icon } from "@chakra-ui/react";
import { FireIcon } from "@/styles/icons/fire";
import EmptyState from "@/components/empty-state";
import SiteTableSkeleton from "@/components/site-table-skeleton";
import DashboardShell from "@/components/dashboard-shell";

const Dashboard = () => {
  const auth = useAuth();
  const { user } = auth;

  if (!user) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <EmptyState />
    </DashboardShell>
  );
};

export default Dashboard;
