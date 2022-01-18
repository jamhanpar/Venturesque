const express = require("express");
const router = express.Router();
const axios = require('axios');

// this is required to access the .env file
require('dotenv').config() 

router.get('/restaurants/location=:location&cuisine=:cuisine', (req, res) => {
    const { location, cuisine } = req.params 
   
    // create an axios rest instance
    let yelpREST = axios.create({
      baseURL: "https://api.yelp.com/v3/",
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        "Content-type": "application/json",
      },
    })

    // replace w/ desired Endpoint
    yelpREST("/businesses/search", {
      params: {
        location: location,
        term: cuisine,
        limit: 50,
      },
    }).then(({ data }) => {
        res.json(data)
    })
});


// const yelp_api_key = process.env.REACT_APP_YELP_API_KEY;

module.exports = router;
// review questions routes