import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const userMessage = body?.messages?.[body.messages.length - 1]?.content

    if (!userMessage) {
      return NextResponse.json({ error: "No message content found." }, { status: 400 })
    }

    const webhookURL = "https://equanax.app.n8n.cloud/webhook/chat/ask"

    const response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage })
    })

    const data = await response.json()

    return NextResponse.json(data)
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to connect to n8n webhook", details: err.message },
      { status: 500 }
    )
  }
}
