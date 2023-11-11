import Railway from "../Railway/Railway";
import {Marker, Popup} from "react-leaflet";
import L from "leaflet";
import React from "react";

const Train = ({ train }) => {
    return (
        <div>
            {train.stations.map((station, index, array) => {
                console.log("2", station);
                return array[index + 1] ? (
                    <Railway
                        key={station.station_id}
                        citiesCoordinates={[[station.latitude, station.longitude], [array[index + 1].latitude, array[index + 1].longitude]]}
                    />
                ) : null;
                }
            )}
            <Marker
                key={train.train_index}
                position={[train.latitude, train.longitude]}
                icon={L.divIcon({
                    className: 'custom-marker',
                    html: `<div class="marker-content">${train.train_index}</div>`
                })}
            >
                <Popup>
                    <div>
                        <h3>Train {train.train_index}</h3>
                        <p>Current Station: {train.current_station_id}</p>
                        <p>Current Time: {train.current_time}</p>
                    </div>
                </Popup>
            </Marker>
        </div>
    )
}

export default Train;