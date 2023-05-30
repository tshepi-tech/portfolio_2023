import AppStyles from "./Styles/AppStyles.css";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

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
			<button className="toggle" onClick={toggleTheme}>
				<FontAwesomeIcon icon={theme === "" ? faMoon : faLightbulb} />
			</button>
			<Home />
		</div>
	);
}

//use intersection observer
