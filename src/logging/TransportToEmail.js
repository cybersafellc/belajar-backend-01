import TransportStream from "winston-transport";
import sentMails from "./sender.js";

class TransportToEmail extends TransportStream {
  constructor(options) {
    super(options);
  }

  log(info, next) {
    const data = `${info.level} : ${info.message}`;
    sentMails(data);
    next();
  }
}

export default TransportToEmail;
