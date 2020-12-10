import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import Feedback from "@/components/feedback";
import React from "react";
import { Box } from "@chakra-ui/react";

export async function getStaticProps(context) {
  const siteId = context.params.siteId;

  const feedback = await getAllFeedback(siteId);
  return {
    props: {
      initialFeedback: feedback,
    },
  };
}

export async function getStaticPaths() {
  const sites = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

const SiteFeedback = ({ initialFeedback }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      with="full"
      maxWith="700px"
      margin="0 auto"
    >
      {initialFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Box>
  );
};

export default SiteFeedback;
