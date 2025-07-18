export async function POST(req: Request): Promise<Response> {
  const body = await req.json();
  const message = body.messages?.[body.messages.length - 1]?.content;

  const res = await fetch("https://equanax.app.n8n.cloud/webhook/chat/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await res.json();

  return Response.json({ answer: data.answer || "No response from n8n." });
}
