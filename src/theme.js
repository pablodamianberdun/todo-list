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
        yellow: "#F5F900",
        grey: "#646464",
		black: "#000000"
    },
});
