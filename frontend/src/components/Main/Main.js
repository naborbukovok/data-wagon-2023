import DataPopup from "../DataPopup/DataPopup";
import Map from "../Map/Map";
import TrainCarriages from "../TrainCarriages/TrainCarriages";
import TrainRoute from "../TrainRoute/TrainRoute";
import "./Main.css";
import React, { useCallback, useState } from "react";
import useWebSocket from "../../hooks/useWebSocket";

function Main() {
  const [data, setData] = useState([]);
  const handleWebSocketData = useCallback((data) => {
    setData((prevTrains) => {
      const trainIndex = prevTrains.findIndex(
        (train) => train.train_index === data.train_index
      );

      if (trainIndex !== -1) {
        prevTrains[trainIndex] = data;
        return [...prevTrains];
      } else {
        return [...prevTrains, data];
      }
    });
  }, []);

  
  useWebSocket(handleWebSocketData, 'ws://94.103.89.174:8000/trains/test');

  console.log("MAIN", data);
  return (
    <main className="main">
      <Map data={data} />
      <DataPopup position="left" markup={<TrainRoute />} />
      <DataPopup position="right" markup={<TrainCarriages />} />
    </main>
  );
}

export default React.memo(Main);
