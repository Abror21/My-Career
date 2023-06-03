import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.min.css";

import "./assets/styles/main.css";
import "./assets/styles/ui.scss";
import "./assets/styles/header.scss";
import "./assets/styles/footer.scss";
import "./assets/styles/fonts.css";
import store from "reduxToolkit/store";

import App from "./App";
// import i18 from "./services/i18";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
);
