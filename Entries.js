import React from "react"
import Entry from "./Entry"
import data from "./data"

const Entries = () => {
        return(
        data.map((item) => {
            return (
            <Entry 
                key={item.id}
                title={item.title}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                imageUrl={item.imageUrl}
            />
                    )
                            }
                )
                )
}

export default Entries