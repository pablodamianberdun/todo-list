import React, { Fragment, useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import Item from "./Item";

const ItemsList = () => {
    const { items } = useContext(ItemsContext);

    return (
        <Fragment>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </Fragment>
    );
};

export default ItemsList;
