// Classes used by Leaflet to position controls
import { useCallback, useMemo, useState } from "react";
import L from 'leaflet'; // Add this line to import the 'L' object
import {
    MapContainer,
    Rectangle,
    TileLayer,
    Marker,
    Popup,
    Polyline,
    useMap,
    useMapEvent,
} from "react-leaflet";
import { useEventHandlers } from "@react-leaflet/core";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import WebSocketComponent from "./websocket";
import {TRAINS} from "./mock";

const POSITION_CLASSES = {
    bottomleft: "leaflet-bottom leaflet-left",
    bottomright: "leaflet-bottom leaflet-right",
    topleft: "leaflet-top leaflet-left",
    topright: "leaflet-top leaflet-right",
};

const BOUNDS_STYLE = { weight: 1 };

function MinimapBounds({ parentMap, zoom }) {
    const minimap = useMap();

    // Clicking a point on the minimap sets the parent's map center
    const onClick = useCallback(
        (e) => {
            parentMap.setView(e.latlng, parentMap.getZoom());
        },
        [parentMap]
    );
    useMapEvent("click", onClick);

    // Keep track of bounds in state to trigger renders
    const [bounds, setBounds] = useState(parentMap.getBounds());
    const onChange = useCallback(() => {
        setBounds(parentMap.getBounds());
        // Update the minimap's view to match the parent map's center and zoom
        minimap.setView(parentMap.getCenter(), zoom);
    }, [minimap, parentMap, zoom]);

    // Listen to events on the parent map
    const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), []);
    useEventHandlers({ instance: parentMap }, handlers);

    return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
}

function MinimapControl({ position, zoom }) {
    const parentMap = useMap();
    const mapZoom = zoom || 0;

    // Memoize the minimap so it's not affected by position changes
    const minimap = useMemo(
        () => (
            <MapContainer
                style={{ height: 80, width: 80 }}
                center={parentMap.getCenter()}
                zoom={mapZoom}
                dragging={false}
                doubleClickZoom={false}
                scrollWheelZoom={false}
                attributionControl={false}
                zoomControl={false}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
            </MapContainer>
        ),
        []
    );

    const positionClass =
        (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;
    return (
        <div className={positionClass}>
            <div className="leaflet-control leaflet-bar">{minimap}</div>
        </div>
    );
}

// Coordinates for the cities
const citiesCoordinates = {
    Uralsk: [51.1645, 53.1681],
    Samara: [53.1959, 50.1002],
    Kazan: [55.8304, 49.0661],
    NaberezhnyeChelny: [55.7437, 52.3956],
};

function ReactControlExample() {
    const [trains, setTrains] = useState(TRAINS);

    // Callback function to handle data received from WebSocket
    const handleWebSocketData = (data) => {
        // Update the state with the received data
        setTrains((prevTrains) => {
            // Find the index of the train in the existing state
            const trainIndex = prevTrains.findIndex((train) => train.train_index === data.train_index);

            if (trainIndex !== -1) {
                // If the train exists, update its information
                prevTrains[trainIndex] = data;
                return [...prevTrains];
            } else {
                // If the train is new, add it to the state
                return [...prevTrains, data];
            }
        });
    };

    console.log(trains);
    return (
        <MapContainer
            style={{ height: "100vh", zIndex: 1 }}
            center={[55.7558, 37.6176]}
            zoom={5}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MinimapControl position="topright" />
            <WebSocketComponent onDataReceived={handleWebSocketData} />


            {/* Render railway lines between cities */}
            <Polyline
                positions={[citiesCoordinates.Uralsk, citiesCoordinates.Samara]}
                color="orange"
                dashArray="10, 10" // Use a dash pattern for a dotted line effect
            />
            <Polyline
                positions={[citiesCoordinates.Samara, citiesCoordinates.Kazan]}
                color="orange"
                dashArray="10, 10"
            />
            <Polyline
                positions={[citiesCoordinates.Kazan, citiesCoordinates.NaberezhnyeChelny]}
                color="orange"
                dashArray="10, 10"
            />

            {trains.map((train) => (
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
            ))}
        </MapContainer>
    );
}

export default ReactControlExample;