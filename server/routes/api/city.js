const express = require("express");
const router = express.Router();
const axios = require('axios');

require('dotenv').config() 

router.get('/location=:location', (req, res) => {     // location = 'latrobe, pa'
  const { location } = req.params;

  let accuweatherREST = axios.create({
    baseURL: `http://dataservice.accuweather.com`,
  })

  accuweatherREST(`/locations/v1/cities/search?q=${location}&`, {
    params: {
      apikey: `${process.env.ACCU_API_KEY}`,
    },
  }).then(({ data }) => res.json(data))

});

module.exports = router;