import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const path = typeof req.query.path === "string" ? req.query.path : "/";
  res.clearPreviewData();
  return res.redirect(encodeURI(path));
};

export default handler;
