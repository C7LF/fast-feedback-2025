import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/firebase-admin";
import { getAllSites } from "@/lib/db-admin";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const {sites, err} = await getAllSites()
  
  if (err) {
    res.status(500).json({ err });
  }
  res.status(200).json({ sites });
};
