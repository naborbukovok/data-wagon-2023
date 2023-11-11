import DataPopup from "../DataPopup/DataPopup";
import Map from "../Map/Map";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <Map />
      <DataPopup position="left" />
      <DataPopup position="right" />
    </main>
  );
}

export default Main;