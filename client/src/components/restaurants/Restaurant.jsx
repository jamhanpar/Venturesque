import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const Restaurant = ({ restaurant, setCurrentIdx, idx }) => {
  return (
    <Card 
      onClick={() => setCurrentIdx(idx)}
      restaurant={restaurant}
    />
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.object
};

export default Restaurant;
