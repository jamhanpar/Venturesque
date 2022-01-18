import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function SearchBar(props) {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    function handleSubmit(e) {
        console.log(term, location);
        e.preventDefault();

        if (typeof props.search === 'function') {
            props.search(term, location);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" onChange={(e) => setTerm(e.target.value)}/>
            <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)}/>
            <i className="fas fa-search" onClick={handleSubmit}></i>
        </form>
    )
}

SearchBar.propTypes = {
    search: PropTypes.func
};
