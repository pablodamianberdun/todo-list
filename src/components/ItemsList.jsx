import React, { Fragment, useContext, useEffect, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import Item from "./Item";
import FiltersTabs from "./FiltersTabs";
import { Text } from "@chakra-ui/react";

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
            {itemsFiltered.length > 0 ? (
                itemsFiltered.map((item) => <Item key={item.id} item={item} />)
            ) : (
                <Text mt={6}>Nothing found!</Text>
            )}
        </Fragment>
    );
};

export default ItemsList;
