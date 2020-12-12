import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/firebase-admin";
import { getAllFeedback } from "@/lib/db-admin";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const siteId = req.query.siteId;
  const { feedback, err } = await getAllFeedback(siteId as string);

  if (err) {
    res.status(500).json({ err });
  }
  res.status(200).json({ feedback });
};
