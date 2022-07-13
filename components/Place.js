import React from "react"

export default function Place(props){
    
    return(
        <div>
            <main className="place">
                <img className="place--photo" src={props.imageUrl} />
                <div className="place--info">
                    <div className="place--location">
                        <img src="./images/map-pin-icon.png"/>
                        <span>{props.location}</span>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h2 className="place--name">{props.title}</h2>
                    <div>
                        <h3 className="place--time">{props.startDate} - {props.endDate}</h3>
                        <p className="place--description">{props.description}</p>
                    </div>
                </div>
            </main>
            <hr />
        </div>
    )
}