import { useAuth } from "@/lib/auth";
import React from "react";
import EmptyState from "@/components/empty-state";
import SiteTableSkeleton from "@/components/site-table-skeleton";
import DashboardShell from "@/components/dashboard-shell";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import SiteTable from "@/components/site-table";
import { SiteTableHeader } from "@/components/site-table-header";

const Dashboard = () => {
  const { user } = useAuth();
  const { data }: any = useSWR(
    user ? ["/api/sites", user.token] : null,
    fetcher
  );

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteTableHeader />
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
