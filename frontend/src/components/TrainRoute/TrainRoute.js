import trainRouteArrow from "../../images/train-route-arrow.svg";
import "./TrainRoute.css";

function TrainRoute() {
  return (
    <div className="train-route">
      <h2 className="train-route__title"></h2>
      <div className="train-route__way">
        <p className="train-route__way-point"></p>
        <img className="train-route__arrow" src={trainRouteArrow} alt="Стрелка" />
        <p className="train-route__way-point"></p>
      </div>
    </div>
  );
}

export default TrainRoute;
