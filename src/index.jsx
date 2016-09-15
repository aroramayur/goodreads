import React from "react";
import ReactDom from "react-dom";
import ReviewList from "./modules/reviews/templates/reviewList.jsx";

class App extends React.Component {
    render () {
        return (
            <div><ReviewList /></div>
        )
    }
}
ReactDom.render(<App />, document.getElementById("app"));