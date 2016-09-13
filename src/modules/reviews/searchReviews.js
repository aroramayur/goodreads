import apiConstants from "../../constants/api.js";
import reviewCardTemplate from "./templates/reviewCard.html";
import reviewStyles from "./styles/style.css";

function searchReviews(keyword) {
    var uri = apiConstants.SEARCH_API;
    uri += "?api-key=" + apiConstants.API_KEY + "&query=" + keyword;
    fetch(uri)
        .then(createReviewCards)
        .catch((err) => {
            console.log("Error while fetching reviews + " + err);
        })
}

function createReviewCards(payload) {
    if (payload.status !== 200) {
        console.log("Looks like there was a problem . Status Code : " + payload.status);
        return;
    }
    payload.json()
        .then((data) => {
            showResults(data);
        })
        .error((err) => {
            console.log(err);
        });
}

function showResults(data) {
    document.querySelector("#results").innerHTML = reviewCardTemplate({
        results:data.results,
        styles:reviewStyles
    });
}

export default {
    searchReviews
}