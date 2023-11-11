import TrainCarriagesListItem from "../TrainCarriagesListItem/TrainCarriagesListItem";
import "./TrainCarriages.css";

function TrainCarriages() {
  return (
    <div className="train-carriages">
      <div className="train-carriages__general-info">
        <p className="train-carriages__title">22 вагона</p>
        <p className="train-carriages__text">Общий вес: 100 тонн</p>
      </div>
      <div className="train-carriages-separator"></div>
      <div className="train-carriages__list-container">
        <ul className="train-carriages__list">
          <TrainCarriagesListItem />
          <TrainCarriagesListItem />
          <TrainCarriagesListItem />
          <TrainCarriagesListItem />
          <TrainCarriagesListItem />
          <TrainCarriagesListItem />
          <TrainCarriagesListItem />
          <TrainCarriagesListItem />
        </ul>
      </div>
    </div>
  );
}

export default TrainCarriages;
