const express = require("express");
const router = express.Router();
const axios = require('axios');

require('dotenv').config() 

router.get('/location=:locationKey', (req, res) => {
  const { locationKey } = req.params 

  let accuweatherREST = axios.create({
    baseURL: `http://dataservice.accuweather.com/currentconditions/v1`,
  })

  accuweatherREST(`/${locationKey}?`, {
    params: {
      apikey: `${process.env.ACCU_API_KEY}`,
    },
  }).then(({ data }) => res.json(data))

});

module.exports = router;