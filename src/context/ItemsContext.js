import React, { createContext, useState } from "react";

export const ItemsContext = createContext();

const ItemsProvider = (props) => {
    const [items, setItems] = useState([]);

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
