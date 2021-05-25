import React from "react";
import { Container } from "@chakra-ui/layout";
import Header from "./components/Header"
import NewItemButton from "./components/NewItemButton"

function App() {
    return (
		<Container maxW="container.sm">
			<Header/>
			<NewItemButton/>			
		</Container>
	)
}

export default App;
