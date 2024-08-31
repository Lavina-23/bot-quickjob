import { Twilio, twiml } from "twilio";
require("dotenv").config();

const MessagingResponse = twiml.MessagingResponse;
const client = new Twilio();

class Service {
  createResponse() {
    return new MessagingResponse();
  }

  reply(response: twiml.MessagingResponse, message: string) {
    response.message(message);
  }

  toString(response: twiml.MessagingResponse) {
    return response.toString();
  }
}

export default Service;
