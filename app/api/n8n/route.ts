import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("✅ Incoming request hit N8N route", JSON.stringify(body));

  return NextResponse.json({
    debug: "You’re hitting the Vercel n8n route.",
    message: body.messages?.[body.messages.length - 1]?.content || "No message",
  });
}
