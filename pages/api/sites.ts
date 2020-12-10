import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/firebase-admin";
import { getAllSites } from "@/lib/db-admin";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const sites = await getAllSites()
  
  res.status(200).json({ sites });
};
