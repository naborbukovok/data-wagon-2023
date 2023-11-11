import DataPopup from "../DataPopup/DataPopup";
import "./Main.css";
import React, {useCallback, useState} from "react";
import Map from "../Map/Map";
import useWebSocket from "../../hooks/useWebSocket";

function Main() {
    const [data, setData] = useState([]);
    const handleWebSocketData = useCallback((data) => {
        setData((prevTrains) => {
            const trainIndex = prevTrains.findIndex((train) => train.train_index === data.train_index);

            if (trainIndex !== -1) {
                prevTrains[trainIndex] = data;
                return [...prevTrains];
            } else {
                return [...prevTrains, data];
            }
        });
    }, []);

    useWebSocket(handleWebSocketData);

    console.log("MAIN", data);
  return (
    <main className="main">
      <Map data={data} />
      <DataPopup position="left" />
      <DataPopup position="right" />
    </main>
  );
}

export default React.memo(Main);