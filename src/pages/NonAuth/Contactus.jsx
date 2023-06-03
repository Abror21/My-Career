import React from "react";
import classes from "./Contactus.module.scss";
import logosInstagram from "../../assets/images/icons/logos_telegram.png";
import logosWhatsapp from "../../assets/images/icons/logos_whatsapp.png";

function Contactus(props) {
	return (
		<section className={classes.contact}>
			<div className="container">
				<div className={classes.contact__inner}>
					<div className={classes.mainContacts}>
						<div className={classes.telegramContact}>
							<img className={classes.telegramContact__img} src={logosInstagram} alt="" />
							<h1 className={classes.telegramContact__title}>Go To Telegram</h1>
						</div>

						<div className={classes.whatsappContact}>
							<img className={classes.telegramContac__imgt} src={logosWhatsapp} alt="" />
							<h1 className={classes.telegramContact__title}>Go To Whatsapp</h1>
						</div>
					</div>

					<div className={classes.contactUs}>
						<h1 className={classes.contactUs__title}>Contact us</h1>
						<p className={classes.contactUs__desc}>Fill in the blank and we will contact you</p>
						<input type="text" placeholder="Name" required />
						<input type="email" placeholder="E-mail" required />
						<input type="number" placeholder="+998 99 999 99 99" min="1" max="13" required />
						<textarea className={classes.textMessage} type="text" placeholder="Text message" required></textarea>
						<button>Send</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contactus;
