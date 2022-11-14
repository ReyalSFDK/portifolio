import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"

import { Home } from "./pages/Home";
import { theme } from "./theme";
import { Navbar } from "./components";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Navbar />
		<Home />
	</ChakraProvider>
)
