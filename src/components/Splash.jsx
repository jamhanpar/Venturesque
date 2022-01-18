import React, { useState } from 'react';
import useReactRouter from "use-react-router";
import { useSearchContext } from '../contexts/searchContext';

// components
import ImgCarousel from './ImgCarousel';

// icons
import { FaSistrix } from 'react-icons/fa';

const Splash = () => {
    const searchCtx = useSearchContext();

    const [location, setLocation] = useState('hoboken, nj');
    // const [cuisine, setCuisine] = useState('restaurant');

    const { history } = useReactRouter();

    const results = (term, location) => {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search/term=${urlEncodedTerm}&location=${urlEncodedLocation}`);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // on submission route to results page with location and default search parameter for now
        searchCtx.setSearch(location);
        searchCtx.setCuisine('restaurant');
        results('restaurant', location);
    }

    return (
        <section className='search-input'>
            <form className='search-form-container' onSubmit={handleSubmit}>
                <div className='search-input-item'>
                    <label className='landing-page-text' htmlFor='location'>the best date near </label>
                    <div className="location-input">
                        <input className='landing-page-input' type='text' id='location' placeholder='city, state' onChange={(e) => setLocation(e.target.value)} value={location}/>
                        <button className='generate-button' type='submit' onClick={handleSubmit}><FaSistrix className="search-icon-grey"/></button>
                    </div>
                    {/* <p className='landing-page-symbol'>&</p>
                    <input className='landing-page-input' type='text' id='cuisine' placeholder='cuisine' onChange={(e) => setCuisine(e.target.value)} value={cuisine}/> */}
                </div>
            </form>
            <ImgCarousel />
        </section>
    );
}

export default Splash;