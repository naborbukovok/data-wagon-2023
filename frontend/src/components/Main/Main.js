import DataPopup from "../DataPopup/DataPopup";
import Map from "../Map/Map";
import TrainCarriages from "../TrainCarriages/TrainCarriages";
import TrainRoute from "../TrainRoute/TrainRoute";
import "./Main.css";
import React from "react";

function Main({data, polygons, hexbin}) {
  console.log("MAIN", data);
  return (
    <main className="main">
      <Map data={data} polygons={polygons} hexbin={hexbin}/>
      <DataPopup position="left" markup={<TrainRoute />} />
      <DataPopup position="right" markup={<TrainCarriages />} />
    </main>
  );
}

export default React.memo(Main);
