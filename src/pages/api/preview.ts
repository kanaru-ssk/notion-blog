import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (
    typeof req.query.token === "string" &&
    req.query.token == process.env.PREVIEW_TOKEN
  ) {
    res.setPreviewData({});
    res.redirect("/");
  }

  res.status(401).json({ code: 401, message: "Unauthorized Error" });
}
