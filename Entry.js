import React from "react"
import data from "./data"

const Entry = (props) => {
    return (
        <div className="entry">
            <div className="image-container">
                <img className="entry-image" src={props.imageUrl} alt={props.title} />
            </div>
            <div className="text-container">
                <img className="pinpoint" src="./images/Fill_219.png" alt="pinpoint"/>
                <h6 className="country">
                    {props.location.toUpperCase()}
                </h6>
                <a className="google-maps-url" href={props.googleMapsUrl}>View on Google Maps</a>
                <h2 className="title">
                    {props.title}
                </h2>
                <p className="date">
                    {props.startDate} - {props.endDate}
                </p>
                <p className="description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Entry