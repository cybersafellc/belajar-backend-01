import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import TransportToEmail from "./TransportToEmail.js";

const logger = winston.createLogger({
  level: "silly",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.ms(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.DailyRotateFile({
      handleExceptions: true,
      handleRejections: true,
      filename: "all-%DATE%.log",
      zippedArchive: true,
      maxSize: "100m",
      maxFiles: "15d",
    }),
    new winston.transports.DailyRotateFile({
      level: "error",
      filename: "error-%DATE%.log",
      zippedArchive: true,
      maxSize: "100m",
      maxFiles: "15d",
    }),
    new TransportToEmail({
      level: "error",
    }),
  ],
});

export default logger;
