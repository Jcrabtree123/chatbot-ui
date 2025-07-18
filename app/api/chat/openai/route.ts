const response = await fetch("https://equanax.app.n8n.cloud/webhook/chat/ask", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: body.messages[body.messages.length - 1].content
  })
});
