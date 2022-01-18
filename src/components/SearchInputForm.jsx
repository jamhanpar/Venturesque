import React from "react";
import PropTypes from "prop-types";

import { FaSearch } from 'react-icons/fa';

const SearchInputForm = (props) => {
  const {
    handleSubmit,
    locationTerm,
    cuisineTerm,
    setLocationTerm,
    setCuisineTerm,
  } = props;

  return (
    <div className="search-info-container">
      <h1 className="results-search-container-title">The Best Date</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <span class="result-text">in</span>
        <input
          className="results-search-input"
          type="text"
          value={locationTerm}
          onChange={(e) => setLocationTerm(e.target.value)}
        />
        <span class="result-text">/</span>
        <input
          className="results-search-input"
          type="text"
          value={cuisineTerm}
          onChange={(e) => setCuisineTerm(e.target.value)}
        />
        <button className="search-icon-btn" type="submit">
          <FaSearch className="search-icon" />
        </button>
      </form>
    </div>
  );
};

SearchInputForm.propTypes = {
  handleSubmit: PropTypes.func,
  locationTerm: PropTypes.string,
  cuisineTerm: PropTypes.string,
  setLocationTerm: PropTypes.func,
  setCuisineTerm: PropTypes.func,
};

export default SearchInputForm;
