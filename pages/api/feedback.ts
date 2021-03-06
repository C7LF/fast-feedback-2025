import { auth } from "@/lib/firebase-admin";
import type { NextApiRequest, NextApiResponse } from "next";
import { getUserFeedback } from "@/lib/db-admin";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //@ts-ignore
    const { uid } = await auth.verifyIdToken(req.headers.token);

    const feedback = await getUserFeedback(uid);

    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json({ err });
  }
};
