import axios from 'axios';

export const fetchActivities = async (lat, lng) => {        // location = {lat:34.3894, lng: 38.4938}
    try {
        const res = await axios.get(`/api/google/activities/location=${lat}%2C%20${lng}`)
        console.log(res.data.results);
        return res.data.results;
    } 
    catch (err) {
        console.log(err)
    }
}

export const fetchGooglePhoto = async (photoreference) => {
    try {
        const res = await axios.get(`/api/google/photo/photoref=${photoreference}`)
        console.log(`Google Photo Image: ${res.data}`);
        return res.data;
    } 
    catch (err) {
        console.log(err)
    }
}

