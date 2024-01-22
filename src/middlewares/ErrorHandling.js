import logger from "../logging/logger.js";
import responses from "../responses/responses.js";

export const PageNotFound = async (req, res) => {
  try {
    return responses(404, "page not found", null, res);
  } catch (error) {
    console.log(error);
    logger.error(
      `error on function PageNotFound at ErrorHandling.js : ${error}`
    );
    return responses(500, "server error", null, res);
  }
};
