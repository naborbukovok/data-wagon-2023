import DataPopup from "../DataPopup/DataPopup";
import Map from "../Map/Map";
import TrainCarriages from "../TrainCarriages/TrainCarriages";
import TrainRoute from "../TrainRoute/TrainRoute";
import "./Main.css";
import React, {useState} from "react";
import {useClickOutside} from "../../hooks/useClickOutside";

function Main({data, polygons, hexbin}) {
  const [routeData, setRouteData] = useState({});

    const handleMapClick = () => {
        if (Object.keys(routeData).length) {
            setRouteData({});
        }
    }

   const ref = useClickOutside(handleMapClick);

    const handleTrainClick = (newRouteData) => {
    setRouteData({"a":"б"});
  }



  return (
    <main className="main">
      <Map data={data} polygons={polygons} hexbin={hexbin} handleTrainClick={handleTrainClick} handleMapClick={handleMapClick}/>
        <div ref={ref}>
            <DataPopup
                position="left"
                isVisible={(Object.keys(routeData).length !== 0) ? true : false}
                markup={ <TrainRoute data={routeData} /> }
            />
        </div>
      {/* <DataPopup position="right" markup={<TrainCarriages />} /> */}
    </main>
  );
}

export default React.memo(Main);
