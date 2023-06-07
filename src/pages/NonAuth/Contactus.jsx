import React, { useEffect } from "react";
import classes from "./Contactus.module.scss";
import logosInstagram from "../../assets/images/icons/logos_telegram.png";
import logosWhatsapp from "../../assets/images/icons/logos_whatsapp.png";

function Contactus(props) {

	// useEffect(() => {
	// 	fetch('http://185.217.131.133:7152/api/contacts-us', {
	// 		method: 'POST',
	// 		headers: {
	// 			"content-type": "application/json"
	// 		},
	// 		body: JSON.stringify({
	// 			name: "Ali",
	// 			email: 'Ali@test.com',
	// 			phone: '+998971234567',
	// 			textMessage: 'some text'
	// 		})
	// 	})
	// 		.then(res => console.log(res))
	// }, [])

	return (
		<section className={classes.contact}>
			<div className="container">
				<div className={classes.contact__inner}>
					<div className={classes.mainContacts}>
						<div className={classes.telegramContact}>
							<img className={classes.telegramContact__img} src={logosInstagram} alt="" />
							<a href="https://t.me/" className={classes.telegramContact__title}>Go To Telegram</a>
						</div>

						<div className={classes.whatsappContact}>
							<img className={classes.telegramContac__imgt} src={logosWhatsapp} alt="" />
							<a href="https://wa.me" className={classes.telegramContact__title}>Go To Whatsapp</a>
						</div>
					</div>

					<form className={classes.contactUs}>
						<h1 className={classes.contactUs__title}>Contact us</h1>
						<p className={classes.contactUs__desc}>Fill in the blank and we will contact you</p>
						<input type="text" placeholder="Name" required />
						<input type="email" placeholder="E-mail" required />
						<input type="number" placeholder="+998 99 999 99 99" min="1" max="13" required />
						<textarea className={classes.textMessage} type="text" placeholder="Text message" required></textarea>
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contactus;
