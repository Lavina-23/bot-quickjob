import { Twilio, twiml } from "twilio";
require("dotenv").config();

const MessagingResponse = twiml.MessagingResponse;
const client = new Twilio();

class Service {
  reply(message: string) {
    const response = new MessagingResponse();
    response.message(message);
    return response.toString();
  }
}

export default Service;
