import React, { useRef } from "react";

const Filter = () => {
  const amusementParkRef = useRef();
  const filterOptions = [
    "amusement_park",
    "aquarium",
    "art_gallery",
    "bar",
    "book_store",
    "bowling_alley",
    "cafe",
    "casino",
    "clothing_store",
    "zoo",
    "tourist_attraction",
    "stadium",
    "shopping_mall",
    "park",
    "painter",
    "night_club",
    "museum",
    "movie_theater",
  ];

  let filterOptionsIndex = filterOptions.map((filter) => (
    <li>
      <input type="checkbox" id={filter} ref={amusementParkRef} />
      <label htmlFor={filter}>{filter}</label>
    </li>
  ));

  return (
    <div className="filter-container">
      <ul>
        {filterOptionsIndex}
      </ul>
    </div>
  );
};

export default Filter;
