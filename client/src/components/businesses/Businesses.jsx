import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';

const Restaurants = (props) => {
    const [bestRestaurant, setBestRestaurant] = useState();
    const [currentIdx, setCurrentIdx] = useState(0);

    const filtered = props.restaurants.filter(restaurant => restaurant.rating >= 4);
    const sortedByReviewCount = filtered.sort((a, b) => b.review_count - a.review_count);
    const sortedByRating = sortedByReviewCount.sort((a, b) => b.rating - a.rating);

    const restaurantIndex = sortedByRating.map(restaurant => (
        <Restaurant key={ restaurant.id } restaurant={ restaurant }/>
    ))

    useEffect(() => {
        setBestRestaurant(restaurantIndex[currentIdx]);
    }, [])

    return (
        <div className="restaurant-list">
            {bestRestaurant}
            {restaurantIndex}
        </div>
    )
}

Restaurants.propTypes = {
  restaurants: PropTypes.array,
};

export default Restaurants;