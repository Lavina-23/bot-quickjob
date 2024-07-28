import { urlencoded } from "body-parser";
import express from "express";
import { createServer } from "http";

const app = express();
app.use(urlencoded({ extended: false }));

const client = require("twilio")();

app.post("/whatsapp", (req, res) => {
  const incomingMessage = req.body.Body;
  const from = req.body.From;
  const to = req.body.To;

  const responseMessage = `Tuliskan judul lowongan"${incomingMessage}"`;

  client.messages
    .create({
      body: responseMessage,
      from: "whatsapp:+14155238886",
      to: "whatsapp:+6287765776316",
    })
    .then((message) => console.log(`Pesan terkirim dengan SID: ${message.sid}`))
    .catch((error) => console.error("Gagal mengirim pesan:", error));
  console.log(`Pesan diterima dari ${from}: ${incomingMessage}`);

  res.send("<Response></Response>");
});

createServer(app).listen(80, () => {
  console.log("Server listening on port 80");
});
