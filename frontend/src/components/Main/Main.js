import DataPopup from "../DataPopup/DataPopup";
import Map from "../Map/Map";
import TrainCarriages from "../TrainCarriages/TrainCarriages";
import TrainRoute from "../TrainRoute/TrainRoute";
import "./Main.css";
import React, {useState} from "react";

function Main({data}) {
  const [routeData, setRouteData] = useState({});

  const handleTrainClick = (newRouteData) => {
    setRouteData({"a":"б"});
  }

  const handleMapClick = () => {
    setRouteData({});
  }

  console.log("MAIN", data);
  return (
    <main className="main">
      <Map
        data={data}
        handleTrainClick={handleTrainClick}
        handleMapClick={handleMapClick}
      />
      <DataPopup
        position="left"
        isVisible={(Object.keys(routeData).length !== 0) ? true : false}
        markup={ <TrainRoute data={routeData} /> }
      />
      {/* <DataPopup position="right" markup={<TrainCarriages />} /> */}
    </main>
  );
}

export default React.memo(Main);
