import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (
    typeof req.query.token === "string" &&
    req.query.token == process.env.PREVIEW_TOKEN
  ) {
    res.setPreviewData({});
    return res.redirect("/");
  }

  return res.status(401).json({ code: 401, message: "Unauthorized Error" });
};

export default handler;
