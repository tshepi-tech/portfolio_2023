import React from "react";
import { Link } from "react-router-dom";
import resume from "../documents/resume2023.pdf";
import NavStyles from "../Styles/NavStyles.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

library.add(faLightbulb, faMoon);

export default function Navigation({ toggleTheme, theme }) {
	const miniNav = () => {
		var x = document.getElementById("myNavbar");
		if (x.className === "navbar") {
			x.className += " responsive";
		} else {
			x.className = "navbar";
		}
	};
	return (
		<>
			<ul className="navbar" id="myNavbar">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link to="/code_projects">Projects</Link>
				</li>
				<li>
					<a href={resume} target="_blank" title="view resume">
						Resume
					</a>
				</li>
				<li>
					<button className="toggle" onClick={toggleTheme}>
						<FontAwesomeIcon icon={theme === "" ? faMoon : faLightbulb} />
					</button>
				</li>
				<li className="icon1">
					<a href="javascript:void(0);" className="icon" onClick={miniNav}>
						size change
					</a>
				</li>
			</ul>
		</>
	);
}
