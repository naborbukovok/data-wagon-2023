import Railway from "../Railway/Railway";
import {Marker, Popup} from "react-leaflet";
import L from "leaflet";
import React, {useState, useRef} from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

const Train = ({ train, onClick, onOutsideClick }) => {
    const [isShowPath, setIsShowPath] = useState(false);
    const ref = useRef();
    useClickOutside([ref], onOutsideClick);
    const handleClick = () => {
        setIsShowPath(!isShowPath);
        onClick(train);
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
            <div ref={ref}>
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
        </div>
    )
}

export default Train;