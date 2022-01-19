import React from "react";
import PropTypes from "prop-types";
import Restaurant from "./Restaurant";

const Restaurants = ({
  restaurants,
  getBestRestaurant,
  setCurrentIdx,
  currentIdx,
}) => {
  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.review_count >= 20 || restaurant.rating >= 4
  );
  const sortedRestaurants = filteredRestaurants
    .sort((a, b) => b.review_count - a.review_count)
    .sort((a, b) => b.rating - a.rating);

  const restaurantIndex = sortedRestaurants.map((restaurant, idx) => (
    <li class="item">
      <Restaurant
        key={restaurant.id}
        restaurant={restaurant}
        idx={idx}
        setCurrentIdx={setCurrentIdx}
      />
    </li>
  ));

  let displayOptions = restaurantIndex.length > 6 ? restaurantIndex.length : 6;

  if (getBestRestaurant) {
    return <div className="search-results">{restaurantIndex[currentIdx]}</div>;
  } else {
    return (
      <div className="slider">
        <ul id="autoWidth" class="cs-hidden">
          {getBestRestaurant
            ? restaurantIndex[currentIdx]
            : restaurantIndex.slice(0, displayOptions)}
        </ul>
      </div>
    );
  }
};

Restaurants.propTypes = {
  restaurants: PropTypes.array,
  setBestRestaurant: PropTypes.func,
  currentIdx: PropTypes.number,
  setCurrentIdx: PropTypes.func,
};

Restaurants.defaultProps = {
  getBestRestaurant: false,
};

export default Restaurants;
