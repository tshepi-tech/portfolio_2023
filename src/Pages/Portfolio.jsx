import { Link } from "react-router-dom";
import CodeProjects from "./CodeProjects";
import coffee from "../Images/coffee_cups.png";
import meetup from "../Images/CareerSesh_online.png";
import { useRef, useEffect } from "react";
import PortfolioStyles from "../Styles/PortfolioStyles.css";

export default function Portfolio() {
	const hiddenElsRef = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("show");
				} else {
					entry.target.classList.remove("show");
				}
			});
		});

		hiddenElsRef.current.forEach((el) => observer.observe(el));

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<section>
			<div>
				<div className="portfolio-element row">
					<img
						className="display_image hidden"
						src={coffee}
						ref={(el) => (hiddenElsRef.current[0] = el)}
					/>
					<div
						className="col hidden"
						ref={(el) => (hiddenElsRef.current[1] = el)}
					>
						<h3>Code</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
							amet pretium neque. Sed euismod orci eleifend, sollicitudin ex ac,
							commodo erat. Nunc auctor egestas vulputate. Sed vel aliquet
							lorem. Morbi varius tellus sed augue viverra, sit amet egestas
							felis gravida. Aliquam venenatis venenatis sapien egestas
							fringilla.
						</p>
						<Link to="/code_projects" className="btn">
							See more
						</Link>
					</div>
				</div>
				<div className="portfolio-element row">
					<img
						className="display_image hidden"
						src={coffee}
						ref={(el) => (hiddenElsRef.current[2] = el)}
					/>
					<div
						className="col hidden"
						ref={(el) => (hiddenElsRef.current[3] = el)}
					>
						<h3>No Code</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
							amet pretium neque. Sed euismod orci eleifend, sollicitudin ex ac,
							commodo erat. Nunc auctor egestas vulputate. Sed vel aliquet
							lorem. Morbi varius tellus sed augue viverra, sit amet egestas
							felis gravida. Aliquam venenatis venenatis sapien egestas
							fringilla.
						</p>
						<a href="#see_more">See more</a>
					</div>
				</div>
				<div className="portfolio-element row">
					<img
						className="display_image hidden"
						src={meetup}
						ref={(el) => (hiddenElsRef.current[4] = el)}
					/>
					<div
						className="col hidden"
						ref={(el) => (hiddenElsRef.current[5] = el)}
					>
						<h3>Other</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
							amet pretium neque. Sed euismod orci eleifend, sollicitudin ex ac,
							commodo erat. Nunc auctor egestas vulputate. Sed vel aliquet
							lorem. Morbi varius tellus sed augue viverra, sit amet egestas
							felis gravida. Aliquam venenatis venenatis sapien egestas
							fringilla.
						</p>
						<a href="#see_more">See more</a>
					</div>
				</div>
			</div>
		</section>
	);
}
