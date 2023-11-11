import Filter from "../Filter/Filter";
import "./FilterList.css";

function FilterList({data}) {
  const trainIndexList = data.map(train => ({ label: train.train_index, value: train.train_index}));
  return (
    <ul className="filter-list">
      <Filter name="Индекс поезда" options={trainIndexList}/>
      <Filter name="Место отбытия" options={[
        { label: "Значение 1", value: "v1" },
        { label: "Значение 2", value: "v2" },
        { label: "Значение 3", value: "v3" },
        { label: "Значение 4", value: "v4" },
        { label: "Значение 5", value: "v5" },
        { label: "Значение 6", value: "v1" },
        { label: "Значение 7", value: "v2" },
        { label: "Значение 8", value: "v3" },
        { label: "Значение 9", value: "v4" },
        { label: "Значение 10", value: "v5" }
      ]}/>
      <Filter name="Место прибытия" options={[
        { label: "Значение 1", value: "v1" },
        { label: "Значение 2", value: "v2" },
        { label: "Значение 3", value: "v3" },
        { label: "Значение 4", value: "v4" },
        { label: "Значение 5", value: "v5" },
        { label: "Значение 6", value: "v1" },
        { label: "Значение 7", value: "v2" },
        { label: "Значение 8", value: "v3" },
        { label: "Значение 9", value: "v4" },
        { label: "Значение 10", value: "v5" }
      ]}/>
      <Filter name="Номер вагона" options={[
        { label: "Значение 1", value: "v1" },
        { label: "Значение 2", value: "v2" },
        { label: "Значение 3", value: "v3" },
        { label: "Значение 4", value: "v4" },
        { label: "Значение 5", value: "v5" },
        { label: "Значение 6", value: "v1" },
        { label: "Значение 7", value: "v2" },
        { label: "Значение 8", value: "v3" },
        { label: "Значение 9", value: "v4" },
        { label: "Значение 10", value: "v5" }
      ]}/>
    </ul>
  );
}

export default FilterList;
