import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import Feedback from "@/components/feedback";
import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/dist/client/router";
import { createFeedback } from "@/lib/db";

export async function getStaticProps(context) {
  const siteId = context.params.siteId;

  const { feedback } = await getAllFeedback(siteId);
  return {
    props: {
      initialFeedback: feedback,
    },
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  if (!sites) {
    return;
  }
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
  const auth = useAuth();
  const router = useRouter();
  const inputEl = useRef(null);
  const [allFeedback, setAllFeedback] = useState(initialFeedback);

  const { user } = auth;

  const onSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      author: user.name,
      authorId: user.uid,
      siteId: router.query.siteId,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: user.provider,
      status: "pending",
    };

    setAllFeedback([newFeedback, ...allFeedback]);

    createFeedback(newFeedback);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxWidth="700px"
      margin="0 auto"
    >
      <Box as="form" onSubmit={onSubmit}>
        <FormControl my={8} id="comment">
          <FormLabel>Comment</FormLabel>
          <Input type="comment" ref={inputEl} />
          <Button mt={2} type="submit" fontWeight="medium">
            Add Comment
          </Button>
        </FormControl>
      </Box>
      {allFeedback &&
        allFeedback.map((feedback) => (
          <Feedback key={feedback.id} {...feedback} />
        ))}
    </Box>
  );
};

export default SiteFeedback;
