import React from 'react';
import PropTypes from 'prop-types';
import { SearchResult } from './SearchResult';

export function SearchResults(props) {
    if(!props.businesses ||  !props.businesses.length) {
        return (
            <div className='search-result-item-card'>
                <img src='https://via.placeholder.com/200x200' alt="business"/>
                <div>
                    <h2>Business Name</h2>
                    <p>Description</p>
                    {/* <p>$$ <span>Burgers</span> <span>Fast Food</span></p> */}
                </div>
            </div>
        )
    };

    if(!props.businesses ||  !props.businesses.length) return null;

    const searchResults = props.businesses.map(business => <SearchResult key={business.id} business={business} />)
    
    return (
        <div>
            {searchResults}
        </div>
    )
}

SearchResults.propTypes = {
  businesses: PropTypes.array,
};