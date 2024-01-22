import nodemailer from "nodemailer";
import logger from "./logger.js";

const transporter = await nodemailer.createTransport({
  // service smtp mu (google, hotmail)
  service: "hotmail",
  auth: {
    // ganti ke email smtp mu
    user: `error-report-nanda-startup@hotmail.com`,
    pass: `narokay123`,
  },
});

const sentMails = async (data) => {
  try {
    const options = await {
      from: '"Error Report👻" <error-report-nanda-startup@hotmail.com>',
      to: "rusnandapurnama@gmail.com",
      subject: `Error report on [${new Date()}]`,
      html: `${data}`,
    };
    await transporter.sendMail(options, (err, ress) => {
      if (err) {
        console.log(err);
        logger.error(`error on function sentMails at sender.js : ${err}`);
      } else if (ress) {
        console.log(`message report has sent from : ${ress.messageId}`);
        logger.info(`message report has sent from : ${ress.messageId}`);
      }
    });
  } catch (error) {
    console.log(`error on function sentMails at sender.js : ${error}`);
    logger.error(`error on function sentMails at sender.js : ${error}`);
  }
};

export default sentMails;
