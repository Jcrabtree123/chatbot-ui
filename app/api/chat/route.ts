export async function POST(req: Request): Promise<Response> {
  const body = await req.json();

  const n8nResponse = await fetch("https://equanax.app.n8n.cloud/webhook/chat/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: body.messages[body.messages.length - 1].content })
  });

  const { answer } = await n8nResponse.json();

  return new Response(JSON.stringify({
    choices: [{ message: { role: "assistant", content: answer } }]
  }), {
    headers: { "Content-Type": "application/json" }
  });
}
