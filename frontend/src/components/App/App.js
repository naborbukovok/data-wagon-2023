import Header from "../Header/Header";
import React, {useState, useCallback, useMemo} from "react";
import Main from "../Main/Main";
import "./App.css";
import useWebSocket from "../../hooks/useWebSocket";

function App() {
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

    const trains = useMemo(() => data[0] ? data[0] : []);

    useWebSocket(handleWebSocketData, 'ws://94.103.89.174:8000/trains/test');
  return (
    <div className="app">
      <Header data={trains} />
      <Main data={trains}/>
    </div>
  );
}

export default App;
