import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useReactRouter from "use-react-router";

import { useSearchContext } from "../../contexts/searchContext";
import { fetchRestaurants } from "../../util/apis/restaurants";
import { fetchActivities } from "../../util/apis/activities";

import Restaurants from "../restaurants/Restaurants";
import Activities from "../activities/Activities";
import SearchInputForm from "../SearchInputForm";
import Map from "../Map";

import loadingGif from "../../assets/gifs/loading.gif";

const Results = () => {
  const searchCtx = useSearchContext();
  const [locationTerm, setLocationTerm] = useState();
  const [cuisineTerm, setCuisineTerm] = useState();
  const [restaurants, setRestaurants] = useState();
  const [activities, setActivities] = useState();
  const [coordinates, setCoordinates] = useState();
  const [currentRestIdx, setCurrentRestIdx] = useState(0);
  const [currentActIdx, setCurrentActIdx] = useState(0);

  // TODO: add show more options toggles
  const [showMoreToggle, setShowMoreToggle] = useState(false);

  let { term, location } = useParams();
  const { history } = useReactRouter();

  useEffect(() => {
    setLocationTerm(location);
    setCuisineTerm(term);

    // get city
    // fetchCity(location).then((res) => {
    //   setCity(res);
    // });

    // get restaurants
    fetchRestaurants(searchCtx.search, searchCtx.cuisine).then((res) => {
      setRestaurants(res);

      setCoordinates({
        lat: res[0].coordinates.latitude,
        long: res[0].coordinates.longitude,
      });

      // get activities
      fetchActivities(
        res[0].coordinates.latitude,
        res[0].coordinates.longitude
      ).then((res) => {
        setActivities(res);
      });
    });
    // eslint-disable-next-line
  }, [searchCtx.search, searchCtx.cuisine]);

  if (!restaurants || !activities)
    return (
      <div className="loading-container">
        <img className="loading-gif" src={loadingGif} alt="Loading..." />
      </div>
    );

  const results = (cuisine, location) => {
    const urlEncodedTerm = encodeURI(cuisine);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search/term=${urlEncodedTerm}&location=${urlEncodedLocation}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    searchCtx.setSearch(locationTerm);
    searchCtx.setCuisine(cuisineTerm);
    results(cuisineTerm, locationTerm);
  };

  return (
    <div className="search-results-section">
      <SearchInputForm
        handleSubmit={handleSubmit}
        locationTerm={locationTerm}
        cuisineTerm={cuisineTerm}
        setLocationTerm={setLocationTerm}
        setCuisineTerm={setCuisineTerm}
      />
      <div className="search-results-container">
        <div className="options-container">
          <div className="recommendations-container">
            <h1 class="search-results-header">Places To Eat</h1>
            {/* TODO: add restaurant recommendation carousel */}
            <Restaurants
              restaurants={restaurants}
              showMoreToggle={showMoreToggle}
              setCurrentIdx={setCurrentRestIdx}
              currentIdx={currentRestIdx}
            />
          </div>
          <div className="recommendations-container">
            <h1 class="search-results-header">Things To Do</h1>
            {/* TODO: add activity recommendation carousel */}
            <Activities
              activities={activities}
              showMoreToggle={showMoreToggle}
              setCurrentIdx={setCurrentActIdx}
              currentIdx={currentActIdx}
            />
          </div>
        </div>
        <Map
          coord={coordinates}
          restaurants={restaurants}
          currentRestIdx={currentRestIdx}
          activities={activities}
          currentActIdx={currentActIdx}
        />
      </div>

      <button
        className="see-more-btn"
        onClick={() => setShowMoreToggle(!showMoreToggle)}
      >
        {showMoreToggle ? "Hide" : "See More"}
      </button>
    </div>
  );
};

Results.defaultProps = {
  location: "hoboken",
  cuisine: "restaurant",
};

export default Results;
