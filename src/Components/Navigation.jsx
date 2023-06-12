import React from "react";
import { Link } from "react-router-dom";
import resume from "../documents/resume2023.pdf";
import NavStyles from "../Styles/NavStyles.css";

export default function Navigation() {
	return (
		<>
			<ul className="navbar">
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
			</ul>
		</>
	);
}
