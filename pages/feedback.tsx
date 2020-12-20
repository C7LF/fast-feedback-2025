import { useAuth } from "@/lib/auth";
import React from "react";
import EmptyState from "@/components/empty-state";
import SiteTableSkeleton from "@/components/site-table-skeleton";
import DashboardShell from "@/components/dashboard-shell";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import FeedbackTable from "@/components/feedback-table";
import { FeedbackTableHeader } from "@/components/feedback-table-heading";

const Dashboard = () => {
  const { user } = useAuth();
  const { data }: any = useSWR(
    user ? ["/api/feedback", user.token] : null,
    fetcher
  );

  if (!data) {
    return (
      <DashboardShell>
        <FeedbackTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <FeedbackTableHeader />
      {data.feedback ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
};

export default Dashboard;
