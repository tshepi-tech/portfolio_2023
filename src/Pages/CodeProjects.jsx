import projects from "../Data/projects.json";
import ProjectsStyles from "../Styles/ProjectsStyles.css";
import ProjectItem from "../Components/ProjectItem";

export default function CodeProjects() {
	const coded_projects = projects.map((project) => (
		<ProjectItem key={project.id} project={project} />
	));
	return <div>{coded_projects}</div>;
}

/* <section id="code_projects">
            
			<div className="project_container">
				{projects.map((project) => (
					<div className="project_card" key={project.id}>
						<div
							className="project_thmb"
							style={{ backgroundImage: `url(${project.ThumbURL})` }}
						>
							<div className="project_overlay">
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<p>{project.stack}</p>
								<a href={project.github_link} title={project.github_link}>
									Github
								</a>
								<a href={project.live_link} title={project.live_link}>
									website
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section> */
