import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const receiveRestaurants = createAction('RECEIVE_RESTAURANTS');

export const fetchRestaurants = (location, cuisine) => async dispatch => {
    try {
        const res = await axios.get(`/api/yelp/restaurants/location=${location}&cuisine=${cuisine}`)
        const data = res.data;
        console.log(data);
        // dispatch(receiveRestaurants(data))
    }
    catch (err) {
        console.log(err)
    }
}

// export const fetchRestaurants = () => {
//     return axios
//         .get('https://randomuser.me/api')
//         .then( res => console.log(res) )
//         .catch( err => console.log(err) )
// }

// export const fetchRestaurants = (term, location) => async dispatch => {
//     try {
//         const res = await axios.get(`${yelpBaseURL}/businesses/search`, { 
//             headers: {
//                 authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
//             },
//             params: {
//                 term,
//                 location
//             }
//         })
//         dispatch(receiveRestaurants(res.data));
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// const yelp = require('yelp-fusion');
// const client = yelp.client('YELP_API_KEY');

// export const fetchRestaurants = (term, location) => { 
//     client.search({ term, location })
//         // .then( res => receiveRestaurants(res.data) )
//         .then( res => console.log(res) )
//         .catch( err => console.log(err) )
// }

// attempting with ajax
// export const fetchRestaurantsAJAX = (term, location) => {
//     $.ajax({
//         url: yelpBaseURL,
//         method: 'GET',
//         headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}`},
//         dataType: 'JSON'        
//     })
//         .then( res => console.log(res) )
//         .catch( err => console.log(err) )
// }

// Example
// let YelpREST = axios.create({
//     baseURL: "https://api.yelp.com/v3/",
//     headers: {
//         Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
//         "Content-type": "application/json"
//     },
// })

// yelpREST(ENDPOINT, { params: { key: value } })
//     .then(({ data }) => {
//         // do something
//     })

// yelpREST("/business/search", {
//     params: {
//         location: "kyoto",
//         term: "coffee",
//         limit: 10,
//     }
// }).then(({ data }) => {
//     let { business } = data
//     businesses.forEach(business => {
//         console.log("Name: ", business.name)
//     }) 
// })