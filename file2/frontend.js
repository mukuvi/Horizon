const response = await fetch("http://localhost:8000", {
  method: "POST",
  body: JSON.stringify({ username: "james" }),
  headers: {
    "Content-Type": "application/json",
  },
});
