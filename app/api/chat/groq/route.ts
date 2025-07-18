import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch("https://equanax.app.n8n.cloud/webhook/chat/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: body.messages[body.messages.length - 1].content
    })
  });

  const data = await response.json();

  return NextResponse.json({
    id: Date.now().toString(),
    role: "assistant",
    content: data.text || "No response"
  });
}
