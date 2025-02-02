import useBackend from "@hooks/useBackend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  console.log(payload);
  const { data } = await useBackend({
    endpoint: "auth/signup",
    method: "post",
    payload: payload,
  });

  const response = NextResponse.json(data);
  response.cookies.set("user", data?.token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
