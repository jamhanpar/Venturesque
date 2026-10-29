import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import { fetchGooglePhoto } from '../../util/apis/activities';

export function SearchResult({ restaurant, activity, type }) { 
  const [photoURL, setPhotoURL] = useState(null);

  useEffect(() => {
    if (type === 'activity') {
      fetchGooglePhoto(activity.photos[0].photo_reference)
        .then(res => {
          setPhotoURL(res)
        });
    }

    // eslint-disable-next-line
  }, [activity]);
  
  if (type === 'restaurant') {
    return (
      <div className="search-result-item-card">
        <img className="restaurant-img" src={restaurant.image_url} alt="business" />
        <div className="item-info-container">
          <h2>{restaurant.name}</h2>
          <div>{restaurant.rating}</div>
          <div>{restaurant.review_count}</div>
          <p>{restaurant.price}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="search-result-item-card">
        <img className="restaurant-img" src={photoURL} alt="business" />
        <div className="item-info-container">
          <h2>{activity.name}</h2>
          <div>{activity.rating}</div>
          <div>{activity.user_ratings_total}</div>
        </div>
      </div>
    );
  }
}

SearchResult.propTypes = {
  restaurant: PropTypes.object,
  activity: PropTypes.object,
  type: PropTypes.string,
};