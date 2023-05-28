import HeroStyles from "../Styles/HeroStyles.css";
export default function Hero() {
	return (
		<section className="hero">
			<h1> Tshepiso Lehutjo </h1>
			<h2>Full stack developer</h2>
			<div className="row">
				<a href="#about" title="About" className="btn">
					About
				</a>
				<a href="#contact" className="btn" title="contact">
					Let's talk
				</a>
			</div>
		</section>
	);
}
