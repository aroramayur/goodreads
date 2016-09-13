import _ from "lodash";
import reviews from "./modules/reviews/searchReviews.js";
var searchReviews = _.debounce((keyword) => {
    reviews.searchReviews(keyword);
}, 500);

document.querySelector("#text-search-review").addEventListener("keyup", (e) => {
    searchReviews(e.target.value);
});