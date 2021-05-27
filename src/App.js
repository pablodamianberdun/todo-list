import React from "react";
import { Container } from "@chakra-ui/layout";
import Header from "./components/Header";
import NewItemButton from "./components/NewItemButton";
import ItemsProvider from "./context/ItemsContext";
import ItemsList from "./components/ItemsList"

function App() {
    return (
        <ItemsProvider>
            <Container maxW="container.sm">
                <Header />
                <NewItemButton />
				<ItemsList/>
            </Container>
        </ItemsProvider>
    );
}

export default App;
