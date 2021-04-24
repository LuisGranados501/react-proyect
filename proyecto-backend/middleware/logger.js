const config = require("../configuration/auth");

const middleware = {
  logger: function (req, res, next) {
    console.log(req.method + " " + req.originalUrl);
    next();
  },
  auth: function (req, res, next) {
    if (!req.get("apiKey") && req.get("apiKey") !== config.apikey) {
      throw new Error("incorrect ApiKey!");
    } else {
      next();
    }
  },
};

module.exports = middleware;