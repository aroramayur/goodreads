import React from "react";
import reviewStyles from "../styles/style.css";

class ReviewCard extends React.Component{
    render() {
        return (
            <div>
            <a href={this.props.url} target="_blank">
            <div className={reviewStyles.result}>
            <div className={reviewStyles.textualInfo}>
            <h3 className={reviewStyles.header}>{this.props.displayTitle}</h3>
            <small className={reviewStyles.byline}> by {this.props.byline}</small>
            <div className={reviewStyles.headline} dangerouslySetInnerHTML={{__html: this.props.headline}}></div>
            <div dangerouslySetInnerHTML={{__html: this.props.summary_short}}></div>
            </div>
            <div className={reviewStyles.poster}>
            <img src={this.props.posterSrc} />
            </div>
            </div>
            </a>
            </div>
        )
    }
}
export default ReviewCard;