import Railway from "../Railway/Railway";
import {Marker, Popup} from "react-leaflet";
import L from "leaflet";
import React, {useState} from "react";

const Train = ({ train }) => {
    const [isShowPath, setIsShowPath] = useState(false);
    const handleClick = () => {
        setIsShowPath(!isShowPath);
    }
    return (
        <div>
            {isShowPath ? train.stations.map((station, index, array) => {
                console.log("2", station);
                return array[index + 1] ? (
                    <Railway
                        key={`${train.train_index} - ${station.station_id} - ${index}`}
                        citiesCoordinates={[[station.latitude, station.longitude], [array[index + 1].latitude, array[index + 1].longitude]]}
                    />
                ) : null;
                }
            ) : null}
            <Marker
                position={[train.latitude, train.longitude]}
                icon={L.divIcon({
                    className: 'custom-marker',
                    html: `<div class="marker-content">${train.train_index}</div>`
                })}
                eventHandlers={{
                    click: handleClick,
                }}
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