import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (token !== process.env.DRAFT_MODE_TOKEN) {
    return new Response("Invalid token", { status: 401 });
  }

  draftMode().enable();

  return redirect("/");
};
