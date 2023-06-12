import AppStyles from "./Styles/AppStyles.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import CodeProjects from "./Pages/CodeProjects";
import Navigation from "./Components/Navigation";

library.add(faLightbulb, faMoon);

export default function App() {
	const [theme, setTheme] = useState("");

	const toggleTheme = () => {
		if (theme === "") {
			setTheme("dark");
		} else {
			setTheme("");
		}
	};

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return (
		<div className={`${theme} container`}>
			<Navigation toggleTheme={toggleTheme} theme={theme} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/code_projects" element={<CodeProjects />} />
			</Routes>
		</div>
	);
}
