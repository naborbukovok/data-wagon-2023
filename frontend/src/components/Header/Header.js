import React, { useCallback, useState } from "react";
import useWebSocket from "../../hooks/useWebSocket";
import Counter from "../Counter/Counter";
import FilterList from "../FilterList/FilterList";
import "./Header.css";

function Header({data}) {
    const [quantity, setQuantity] = useState([]);
    const handleWebSocketData = useCallback((data) => {
        setQuantity(data.trains_amount);
        console.log(data);
    }, []);

    useWebSocket(handleWebSocketData, 'ws://94.103.89.174:8000/trains/amount');

    return (
        <header className="header">
            <Counter quantity={quantity} />
            <FilterList data={data} />
            <button className="header__button" type="submit">Применить фильтры</button>
        </header>
    );
}

export default Header;