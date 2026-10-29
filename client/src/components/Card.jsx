import React from "react";
import PropTypes from "prop-types";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Card = ({ restaurant, activity, imageURL }) => {
  const displayStars = [];
  const rating = restaurant ? restaurant.rating : activity.rating;
  const name = restaurant ? restaurant.name : activity.name;

  // creating start illustration based on the rating
  for (let i = 0.0; i < 5.0; i++) {
    if (i < rating && i + 0.5 !== rating) {
      displayStars.push(<FaStar key={i} />);
    } else if (i + 0.5 === rating) {
      displayStars.push(<FaStarHalfAlt key={i} />);
    } else {
      displayStars.push(<FaRegStar key={i} />);
    }
  }

  // shorten restaurant/activity name
  let shortenedName;
  if (name.length > 30) {
    shortenedName = name.slice(0, 30) + "...";
  }

  if (restaurant) {
    return (
      <div class="card-item">
        <div class="slide-img">
          <img src={restaurant.image_url} alt="business" />
        </div>
        <div class="detail-box">
          <div class="type">
            {/* TODO: find yelp link for restaurant */}
            <a href="https://www.yelp.com/">
              {shortenedName ? shortenedName : name}
            </a>
            <div>{displayStars}</div>
          </div>
          <div class="price">{restaurant.price}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="card-item">
        <div class="slide-img">
          <img src={imageURL} alt="business" />
        </div>
        <div class="detail-box">
          <div class="type">
            {/* TODO: link to google search page or activity website */}
            <a href="https://www.google.com/">
              {shortenedName ? shortenedName : name}
            </a>
            <div>{displayStars}</div>
          </div>
          <div class="price">{rating}</div>
        </div>
      </div>
    );
  }
};

Card.propTypes = {
  restaurant: PropTypes.object,
};

export default Card;
