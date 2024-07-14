const accountSid = "ACc3d57faf6fe0a8dcda0db041e4877e09";
const authToken = "a120e00c21b45456af0e4e5fbcb1917c";
const client = require("twilio")(accountSid, authToken);

client.messages
	.create({
		body: "Hai, Lavina! Keep Going!",
		from: "whatsapp:+14155238886",
		to: "whatsapp:+6287765776316",
	})
	.then((message) => console.log(message.sid));
