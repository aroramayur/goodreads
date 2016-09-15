import apiConstants from "../../constants/api.js";
import reviewCardTemplate from "./templates/reviewCard.html";
import reviewStyles from "./styles/style.css";
import ReviewList from "./templates/reviewList.jsx";
import React from "react";
import ReactDom from "react-dom";

function searchReviews(keyword) {
    var uri = apiConstants.SEARCH_API;
    uri += "?api-key=" + apiConstants.API_KEY + "&query=" + keyword;
    return fetch(uri)
        .then(parseReviews)
        .catch((err) => {
            Console.error("Error while fetching reviews. " + err);
        });
}

function parseReviews(payload) {
    return payload.json()
        .then((data) => data)
        .catch((err) => {
            console.error("Error while parsing JSON.");
        });
}

export default {
    searchReviews
}