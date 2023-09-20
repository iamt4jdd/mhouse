import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if(process.env.NODE_ENV === "production") disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GlobalStyles>
			<App />
		</GlobalStyles>
	</React.StrictMode>
);
