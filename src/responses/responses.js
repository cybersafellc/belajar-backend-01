import logger from "../logging/logger.js";

const responses = async (statusCode, message, data, res) => {
  try {
    res.status(statusCode).json({
      message: message,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "server error",
    });
    logger.error(`error on function responses at responses.js`);
  }
};
export default responses;
