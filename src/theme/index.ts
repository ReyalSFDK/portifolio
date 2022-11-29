import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

const Heading: ComponentStyleConfig = {
	variants: {
		htmlTags: {
			position: "relative",
			marginY: 10,
			_before: {
				content: '"<h1>"',
				color: "#515152",
				fontSize: "xl",
				position: "absolute",
				marginTop: -5,
				marginLeft: -5,
			},
			_after: {
				content: '"</h1>"',
				color: "#515152",
				fontSize: "xl",
				position: "absolute",
				bottom: 0,
				left: 0,
				marginBottom: -5,
				marginLeft: -5,
			},
		},
	},
};

const Text: ComponentStyleConfig = {
	variants: {
		htmlTags: {
			fontSize: "lg",
			position: "relative",
			marginY: 10,
			_before: {
				content: '"<p>"',
				color: "#515152",
				fontSize: "xl",
				position: "absolute",
				marginTop: -5,
				marginLeft: -5,
			},
			_after: {
				content: '"</p>"',
				color: "#515152",
				fontSize: "xl",
				position: "absolute",
				bottom: 0,
				left: 0,
				marginBottom: -5,
				marginLeft: -5,
			},
		},
	},
}

export const theme = extendTheme({
	config: {
		initialColorMode: "dark",
	},
	components: {
		Heading,
		Text,
	}
});
