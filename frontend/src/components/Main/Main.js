import DataPopup from "../DataPopup/DataPopup";
import Map from "../Map/Map";
import TrainCarriages from "../TrainCarriages/TrainCarriages";
import TrainRoute from "../TrainRoute/TrainRoute";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <Map />
      <DataPopup position="left" markup={<TrainRoute />} />
      <DataPopup position="right" markup={<TrainCarriages />} />
    </main>
  );
}

export default Main;