import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const path = typeof req.query.path === "string" ? req.query.path : "/";
  res.clearPreviewData();
  res.redirect(path);
}
