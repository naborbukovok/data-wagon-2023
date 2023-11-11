import trainRouteArrow from "../../images/train-route-arrow.svg";
import TrainRouteListItem from "../TrainRouteListItem/TrainRouteListItem";
import "./TrainRoute.css";

function TrainRoute() {
  return (
    <div className="train-route">
      <h2 className="train-route__title">0001</h2>
      <div className="train-route__way">
        <p className="train-route__way-point">Станция 1</p>
        <img className="train-route__arrow" src={trainRouteArrow} alt="Стрелка" />
        <p className="train-route__way-point">Станция 2</p>
      </div>
      <div className="train-route-separator"></div>
      <div className="train-route__list-container">
        <ul className="train-route__list">
          <TrainRouteListItem />
          <TrainRouteListItem />
          <TrainRouteListItem />
          <TrainRouteListItem />
          <TrainRouteListItem />
          <TrainRouteListItem />
          <TrainRouteListItem />
          <TrainRouteListItem />
        </ul>
      </div>
    </div>
  );
}

export default TrainRoute;
