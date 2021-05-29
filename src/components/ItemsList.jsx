import React, { Fragment, useContext, useEffect, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import Item from "./Item";
import FiltersTabs from "./FiltersTabs";

const ItemsList = () => {
    const { items } = useContext(ItemsContext);

    const [itemsFiltered, setItemsFiltered] = useState([]);

    const [filter, setFilter] = useState("all");

    useEffect(() => {
        const updateList = () => {
            if (filter === "all") {
                setItemsFiltered(items);
                return;
            }
            const filtered = items.filter((item) => item.status === filter);
            setItemsFiltered(filtered);
        };
        updateList();
    }, [filter, items]);

    return (
        <Fragment>
            <FiltersTabs setFilter={setFilter} />
            {itemsFiltered.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </Fragment>
    );
};

export default ItemsList;
