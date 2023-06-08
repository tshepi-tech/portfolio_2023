import headshot from "../Images/headshot.jpg";

export default function ProjectItem({ project }) {
	const {
		alt,
		id,
		description,
		ThumbURL,
		title,
		stack,
		github_link,
		live_link,
	} = project;

	// Properties
	let imageURL = "";

	// Safeguard
	try {
		imageURL = require(`../Images/${ThumbURL}`);
	} catch {
		imageURL = headshot;
	}
	return (
		<section id="code_projects">
			<div className="project_container">
				<div className="project_card">
					<div
						className="project_thmb"
						style={{ backgroundImage: `url(${imageURL})` }}
					>
						<div className="project_overlay">
							<h3>{title}</h3>
							<p>{description}</p>
							<p>{stack}</p>
							<a href={github_link} title={github_link}>
								Github
							</a>
							<a href={live_link} title={live_link}>
								website
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
