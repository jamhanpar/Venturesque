import axios from 'axios';

export const fetchRestaurants = async (location, cuisine) => {
    try {
        const res = await axios.get(`/api/yelp/restaurants/location=${location}&cuisine=${cuisine}`)
        console.log(res.data.businesses);
        return res.data.businesses;
    } 
    catch (err) {
        console.log(err)
    }
}