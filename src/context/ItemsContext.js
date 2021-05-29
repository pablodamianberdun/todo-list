import React, { createContext, useState, useEffect } from "react";

export const ItemsContext = createContext();

const getItemsLS = () => {
	const items = JSON.parse(localStorage.getItem("items"));
	if (!items) return []
	else return items
}

const ItemsProvider = (props) => {
    const [items, setItems] = useState(getItemsLS);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    return (
        <ItemsContext.Provider
            value={{
                items,
                setItems,
            }}
        >
            {props.children}
        </ItemsContext.Provider>
    );
};

export default ItemsProvider;
