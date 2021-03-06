import React from "react";
import PropTypes from "prop-types";
import Restaurant from "./Restaurant";

const Restaurants = ({
  restaurants,
  showMoreToggle,
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

  if (showMoreToggle) {
    // TODO: make slider work
    return (
      <div className="slider">
        <ul id="autoWidth" class="cs-hidden">
          {showMoreToggle
            ? restaurantIndex[currentIdx]
            : restaurantIndex.slice(0, displayOptions)}
        </ul>
      </div>
    );
  } else {
    return <div className="search-results">{restaurantIndex[currentIdx]}</div>;
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
