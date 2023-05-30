import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
			)
			.then(
				(result) => {
					alert("Message sent successfully! 👌");
				},
				(error) => {
					alert("Failed to send message. 😕");
				},
			);
	};

	return (
		<section>
			<form id="form" ref={form} onSubmit={sendEmail}>
				<div className="col">
					<div className="row">
						<label>Name</label>
						<input className="input1" type="text" name="user_name" />
					</div>
					<div className="row">
						<label>Email</label>
						<input className="input1" type="email" name="user_email" />
					</div>

					<div className="row">
						<label>Message</label>
						<textarea name="message" />
					</div>
					<input className="btn" type="submit" value="Send" />
				</div>
			</form>
		</section>
	);
}
