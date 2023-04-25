const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv").config();

const router = express.Router();

router.get("/", async (req, res, next) => {
  let isResponse;
  await axios({
    method: "get",
    url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${req.query.symbol}  `,
    headers: {
      "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
    },
  })
    .then((response) => {
      isResponse = response.data.data;
    })
    .catch((err) =>
      res.status(err.response.status).json(err.response.statusText)
    );
  res.send(isResponse);
});

module.exports = router;
