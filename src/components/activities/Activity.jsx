import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import { fetchGooglePhoto } from "../../util/apis/activities";

const Activity = ({ activity, setCurrentIdx, idx, setIsReady}) => {
  const [photoURL, setPhotoURL] = useState(null);

  useEffect(() => {
    if (activity.photos) {
      fetchGooglePhoto(activity.photos[0].photo_reference).then(res => setPhotoURL(res));
    }

    // eslint-disable-next-line
  }, [activity]);

  // TODO: add loading render or consider alternative approach to pre-rendering all the activities
  if (!photoURL) return "loading...";
  // if (photoURL) {
  //   setIsReady(true);
  // } else {
  //   setIsReady(false);
  // }

  return (
    <Card
      onClick={() => setCurrentIdx(idx)}
      activity={activity}
      imageURL={photoURL}
    />
  );
};

Activity.propTypes = {
  activity: PropTypes.object,
};

export default Activity;
