import trainCarriagesListItemArrow from "../../images/train-carriages-list-item-arrow.svg";
import "./TrainCarriagesListItem.css";

function TrainCarriagesListItem() {
  return (
    <li className="train-carriages__list-item">
      <h3 className="train-carriages__list-item-title">Имя вагона</h3>

      <div className="train-carriages__list-item-way">
        <p className="train-carriages__list-item-way-point">Станция 1</p>
        <img className="train-carriages__list-item-arrow" src={trainCarriagesListItemArrow} alt="Стрелка" />
        <p className="train-carriages__list-item-way-point">Станция 2</p>
      </div>
    </li>
  );
}

export default TrainCarriagesListItem;