import axios from 'axios';

export const fetchCity = async (location) => {
    try {
        const res = await axios.get(`/api/city/location=${location}`);
        console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}