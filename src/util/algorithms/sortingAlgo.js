export const sortBestRestaurant = (restaurants, currentIdx, setCurrentIdx) => {
    let rating = 5;

    const filtered = restaurants.filter(restaurant => restaurant.rating >= 4);
    const sortedByReviewCount = filtered.sort((a, b) => b.review_count - a.review_count);
    const sortedByRating = sortedByReviewCount.sort((a, b) => b.rating - a.rating);

    while (rating >= 4) {
        for (let i = currentIdx+1; i < sortedByRating.length; i++) {
            if (sortedByRating[i].rating === rating ) {
                setCurrentIdx(i);
                return sortedByRating[i]; 
            }
        }

        rating -= 0.5;
    }

    return sortedByRating[currentIdx];
};