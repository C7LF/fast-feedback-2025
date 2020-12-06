import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/firebase-admin";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const sitesRef = await db.collection("sites").get();

  let sites = [];
  sitesRef.forEach((site) => {
    sites.push({ id: site.id, ...site.data() });
  });

  res.status(200).json(sites);
};
