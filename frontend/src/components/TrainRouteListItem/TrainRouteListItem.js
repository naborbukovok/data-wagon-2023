import "./TrainRouteListItem.css";

function TrainRouteListItem() {
  return (
    <li className="train-route__list-item">
      <p className="train-route__list-item-time">7:11</p>
      <div>
        <h3 className="train-route__list-item-title">Станция 1</h3>
        <p className="train-route__list-item-railway">Путь 1</p>
      </div>
    </li>
  );
}

export default TrainRouteListItem;
