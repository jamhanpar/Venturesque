import axios from 'axios';
import { ACCU_API_KEY } from '../config';

export async function getWeather(locationKey) {
    try {
        const res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${ACCU_API_KEY}`);
        console.log(res.data);
        return res.data;        // [{}]
    } catch (error) {
        console.error(error);
    }
}

export async function getCities(city) {
    try {
        const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${ACCU_API_KEY}&q=${city}`);
        console.log(res.data);
    } catch (error) {
        console.error(error);
    }
}

// export const Weather = () => {
//     const tempLocationKey = 339490;
//     const searchTerm = 'Palisades%20Park';

//     async function getWeather(locationKey) {
//         try {
//             const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${ACCU_API_KEY}`);
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     async function getCities(city) {
//         try {
//             const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${ACCU_API_KEY}&q=${city}`);
//             console.log(res.data);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     return (
//         <>
//             <button onClick={() => getWeather()}>Weather</button>
//             <button onClick={() => getCities('Palisades Park')}>Cities</button>
//         </>
//     )
// }

// export default Weather;