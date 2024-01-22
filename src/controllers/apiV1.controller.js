import logger from "../logging/logger.js";
import responses from "../responses/responses.js";

export const detailRequest = async (req, res) => {
  try {
    const data = await {
      header: req.headers,
      body: req.body,
      query: req.query,
      params: req.params,
    };
    return responses(200, "successfuly response", data, res);
  } catch (error) {
    console.log(error);
    await logger.error(
      `error on controllers detaiRequest at apiV1.controller.js : ${error}`
    );
    return responses(500, "server error", null, res);
  }
};
