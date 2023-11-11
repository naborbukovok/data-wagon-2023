import Counter from "../Counter/Counter";
import FilterList from "../FilterList/FilterList";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Counter quantity={77} />
      <FilterList />
      <button className="header__button" type="submit">Применить фильтры</button>
    </header>
  );
}

export default Header;
