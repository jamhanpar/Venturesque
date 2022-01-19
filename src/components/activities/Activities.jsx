import React, { useState } from "react";
import PropTypes from "prop-types";
import Activity from "./Activity";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Activities = ({
  activities,
  showMoreToggle,
  setCurrentIdx,
  currentIdx,
}) => {
  const [isReady, setIsReady] = useState(true);

  const filteredActivities = activities.filter(
    (activity) =>
      (activity.user_ratings_total >= 20 || activity.rating >= 4) &&
      activity.photos
  );
  const sortedActivities = filteredActivities
    .sort((a, b) => b.user_ratings_total - a.user_ratings_total)
    .sort((a, b) => b.rating - a.rating);

  const activityIndex = sortedActivities.map((activity, idx) => (
    <Activity
      key={activity.place_id}
      activity={activity}
      setCurrentIdx={setCurrentIdx}
      idx={idx}
      setIsReady={setIsReady}
    />
  ));

  //   const sortedActivities = activities.sort((a, b) => {
  //     let aValue =
  //       a.review_count < 15 || a.rating === 5
  //         ? 0
  //         : a.rating + a.review_count / 100000;
  //     let bValue =
  //       b.review_count < 15 || a.rating === 5
  //         ? 0
  //         : b.rating + b.review_count / 100000;
  //     return bValue - aValue;
  //   });

  // if (!isReady) return 'loading...';

  if (showMoreToggle) {
    return (
      <div className="activities-list">
        <FaAngleLeft
          onClick={() => setCurrentIdx(currentIdx > 0 ? currentIdx - 1 : 0)}
        />
        {activityIndex.slice(0, 6)}
        <FaAngleRight
          onClick={() =>
            setCurrentIdx(
              currentIdx < sortedActivities.length - 1
                ? currentIdx + 1
                : sortedActivities.length - 1
            )
          }
        />
      </div>
    );
  } else {
    return <div className="search-results">{activityIndex[currentIdx]}</div>;
  }
};

Activities.propTypes = {
  activities: PropTypes.array,
  setBestActivity: PropTypes.func,
  currentIdx: PropTypes.number,
  setCurrentIdx: PropTypes.func,
};

Activities.defaultProps = {
  getBestActivity: false,
};

export default Activities;
