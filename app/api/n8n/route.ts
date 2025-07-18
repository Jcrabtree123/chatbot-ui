export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();

    // Full message history from the frontend
    const messages = body.messages;

    const response = await fetch('https://equanax.app.n8n.cloud/webhook/chat/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages }) // sending entire history
    });

    const data = await response.json();

    return Response.json({
      answer: data.answer ?? "No response from n8n."
    });
  } catch (err) {
    console.error("API route error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
