import { headers } from "next/headers";

export async function getVisitorCountry() {
  const headersList = await headers();

  return headersList.get("x-vercel-ip-country") ?? "IN";
}