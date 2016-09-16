import React from "react";
class SearchReviews extends React.Component {
    render()  {
        return (
           <input id={this.props.id} onKeyUp={this.props.searchReviews}  type='text' placeholder="search for a movie review...( title, cast ...just about anything)"></input>
        )
    }
}
export default SearchReviews

