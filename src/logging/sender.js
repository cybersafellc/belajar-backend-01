import nodemailer from "nodemailer";
import logger from "./logger.js";

const transporter = await nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: `error-report-nanda-startup@hotmail.com`,
    pass: `narokay123`,
  },
});

const sentMails = async (data) => {
  try {
    const options = await {
      from: '"Error Report👻" <error-report-nanda-startup@hotmail.com>',
      to: "rusnandapurnama@gmail.com",
      subject: `Error report on [${new Date()}]`, // Subject line
      html: `${data}`, // plain text body
    };
    await transporter.sendMail(options, (err, ress) => {
      if (err) {
        logger.error(`error on function sentMails at sender.js : ${err}`);
      } else if (ress) {
        logger.info(`message report has sent from : ${ress.messageId}`);
      }
    });
  } catch (error) {
    logger.error(`error on function sentMails at sender.js : ${error}`);
  }
};

export default sentMails;
