import headshot from "../Images/headshot.jpg";
import AboutStyles from "../Styles/AboutStyles.css";

export default function About() {
	return (
		<section id="about">
			<div className="row">
				<img
					alt="headshot of Tshepiso in monochrome"
					src={headshot}
					aria-label="tshepiso lehutjo headshot"
				/>
				<div className="col">
					<h2>About</h2>

					<p>
						Hi there! My name is Tshepiso Lehutjo. I am a full stack developer
						with a foundation in the frontend. I am based in Lund, Sweden.
					</p>
					<p>
						Currently I am frontend developer consultant at
						<a
							href="https://tretton37.com/"
							title="tretton37"
							aria-label="tretton37"
						>
							{" "}
							tretton37
						</a>
					</p>
					<p>
						When I am not coding you can find me creating content,reading,
						engaging with my{" "}
						<a href="https://careersesh.club">jobseekers community</a> or
						exploring life with my son
					</p>
				</div>
			</div>
		</section>
	);
}
