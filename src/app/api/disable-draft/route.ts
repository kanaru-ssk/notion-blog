import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path");

  draftMode().disable();
  return redirect(encodeURI(path || "/"));
};
