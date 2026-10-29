import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { fetchRestaurants } from '../../util/apis/restaurants';
import { fetchActivities, fetchGooglePhoto } from '../../util/apis/activities';
import { fetchWeather } from '../../util/apis/weather';
import { fetchCity } from '../../util/apis/city';

import Restaurants from '../restaurants/Restaurants';
import Activities from '../activities/Activities';
import WeatherDisplay from '../weather/WeatherDisplay';
import Card from '../Card';
import Filter from '../filter/Filter';

import { FaTimes, FaSearch, FaBars } from 'react-icons/fa';
import { FaStar, FaRegStar, FaStarHalfAlt, FaCloudMoonRain, FaCloudMoon, FaCloudRain, FaCloudShowersHeavy , FaCloudSunRain, FaCloudSun, FaCloud, FaSun, FaMoon, FaSnowflake } from 'react-icons/fa';

import logo from "../../assets/img/temp-logo.png";
import amusementPark from "../../assets/img/amusement-park.svg";

import '../stylesheets/testing.scss';

const Testing = () => {
    // const [user, setUser] = useState();
    const [restaurants, setRestaurants] = useState([]);
    const [activities, setActivities] = useState([]);
    const city = 'palisades park';
    const cuisine = 'restaurant';

    useEffect(() => {
        // const fetchUser = async () => {
        //     const res = await fetch('http://localhost:5000/user');
        //     const data = await res.json()
        //     console.log(data);
        //     setUser(data);
        // }

        fetchRestaurants(city, cuisine)
            .then(res => {
                setRestaurants(res);

                fetchActivities(res[0].coordinates.latitude, res[0].coordinates.longitude)
                    .then(res => setActivities(res))
            });
    }, [])

    if (!restaurants) return null;

    return (
        <div>
            <div className="container">
                <h1>Icons:</h1>
                <FaTimes style={{ color: 'black', cursor: 'pointer' }}/>
                <FaSearch style={{ color: 'black' }}/>
                <FaSun />
                <FaCloudSun />
                <FaCloudSunRain />
                <FaCloud />
                <FaCloudRain />
                <FaCloudShowersHeavy />
                <FaMoon />
                <FaCloudMoon />
                <FaCloudMoonRain />
                <FaSnowflake />
                <FaStar />
                <FaRegStar />
                <FaStarHalfAlt />
                <FaBars />
            </div>
            <div className="container">
                <h1>Images:</h1>
                <img className="logo" src={logo} alt="App Logo" />
                <img className="img-testing" src={amusementPark} alt="Amusement Park" />
            </div>
            <div className="container">
                <h1>API Testing:</h1>
                <button onClick={() => fetchRestaurants('queens', 'restaurant')}>Restaurants</button>
                <button onClick={() => fetchActivities( 40.7440, -74.0324)}>Activities</button>
                <button onClick={() => fetchGooglePhoto("Aap_uEBKiq1wMmnu2IfnEZq-B3g3QTtL3hwg0mJmhvCMAqHqhXxKyxRs06HPGj7ccXHvOgv3313p-l4D6ISnkAme3LZvJWaM15LYwH2mb18LoP_d3XQkpLKKdm84am3OpuVD3YLSIb-i3P7XjhdzUNEuLeMpFht3hKeoTJqeyvzvykiitxRA")}>Photo</button>
                <button onClick={() => fetchWeather(339490)}>Weather</button>
                <button onClick={() => fetchCity('hoboken, nj')}>City</button>
            </div>
            <div className="container">
                <h1>Component Testing:</h1>
                <Filter />
                <Restaurants restaurants={restaurants} />
                <Activities activities={activities} />
                <WeatherDisplay location={'hoboken, nj'} />
                <Card />
            </div>
        </div>
    )
}

// const msp = () => ({

// });

// const mdp = dispatch => ({

// });

export default connect(null, null)(Testing);