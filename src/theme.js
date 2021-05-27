import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
	styles: {
		global: {
			body: {
				bgColor: "black",
				color: "white"
			},
		}
	},
    colors: {
        gray: "#3A3A3A",
		black: "#000000",
		yellow: "#F5F900",
    },
});
