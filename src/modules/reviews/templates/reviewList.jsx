import React from "react";
import Reviews from "../searchReviews.js";
import ReviewCard from "./reviewCard.jsx";
import reviewListStyles from "../styles/reviewList.css";
import _ from "lodash";
const ReviewList =  React.createClass({
    getInitialState:function() {
        return {
            results:[]
        };
    },
    searchReviews:function(e) {
      var self = this;
      Reviews.searchReviews(e.target.value)
      .then((d) => {
          self.setState({
              results:d.results
          });
      })
      .catch((err) => {
          console.error(err);
      });
    },
    render:function() {
        let results = this.state.results.map(result => {
          let props = {}    
          result.display_title &&  ( props.displayTitle = result.display_title);
          result.byline && (props.byline = result.byline);
          result.link  &&  result.link.url && (props.url = result.link.url);
          result.headline && ( props.headline = result.headline );
          result.link &&  result.link.suggested_link_text && ( props.linkText =result.link.suggested_link_text )
          result.multimedia && result.multimedia.src && (props.posterSrc = result.multimedia.src)
           return (
               <ReviewCard {...props} />
           )
        });
        return (
            <div>
            <input id={reviewListStyles.textSearchReview} onKeyUp={this.searchReviews}  type='text' placeholder="search for a movie review ( title , cast , etc.)"></input>
            {results}
            </div>
        )      
    }
});

export default ReviewList;
