import axios from 'axios';

export const fetchWeather = async (location) => {
    try {
        const res = await axios.get(`/api/accuweather/location=${location}`);
        console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}