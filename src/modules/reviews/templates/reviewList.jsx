import React from "react";
import Reviews from "../searchReviews.js";
import ReviewCard from "./reviewCard.jsx";
import reviewListStyles from "../styles/reviewList.css";
import SearchReviews from "./SearchReviews.jsx";
import Loader from "react-loader";
import _ from "lodash";
import NYTimesLogo from "../../../resources/nyt-api-logo.png";
const ReviewList =  React.createClass({
    getInitialState:function() {
        return {
            results:[],
            loaded:true
        };
    },
    delayedSearch:_.debounce(function(keyword) {
      var self = this;
      if(keyword && keyword.length) {
      Reviews.searchReviews(keyword)
      .then((d) => {
          self.setState({
              results:d.results,
              loaded:true
          });
      })
      .catch((err) => {
          console.error(err);
      });
    }
    else {
        self.setState({
            loaded:true
        });
    }},400),
    searchReviews:function(e) {
        this.setState({
            results:[],
            loaded:false
        });
        this.delayedSearch(e.target.value);
    },
    render:function() {
        let results = this.state.results.map(result => {
          let props = {}    
          result.display_title &&  ( props.displayTitle = result.display_title);
          result.byline && (props.byline = result.byline);
          result.link  &&  result.link.url && (props.url = result.link.url);
          result.headline && ( props.headline = result.headline );
          result.summary_short && ( props.summary_short = result.summary_short);
          result.link &&  result.link.suggested_link_text && ( props.linkText =result.link.suggested_link_text )
          result.multimedia && result.multimedia.src && (props.posterSrc = result.multimedia.src)
           return (
               <ReviewCard {...props} />
           )
        });
        return (
            <div>
            <div>
            <SearchReviews id={reviewListStyles.textSearchReview} searchReviews={this.searchReviews} />
            <img src={NYTimesLogo} id={reviewListStyles.logo} ></img>
            </div>
            <Loader loaded={this.state.loaded}>
            {results}
            </Loader>
            </div>
        )      
    }
});

export default ReviewList;
