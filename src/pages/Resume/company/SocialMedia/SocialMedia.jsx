import React from "react";
import downIcon from "../../../assets/images/Resume/down.png";
import classes from "./SocialMedia.module.scss";
import telgramIcon from "../../../assets/images/Resume/telegramIcon.png";
import whatsUppIcon from "../../../assets/images/Resume/whatsUppIcon.png";
import cancel from "../../../assets/images/Resume/cancel.png";

function SocialMedia() {
	const social = [
		{ icon: whatsUppIcon, name: "Whats app" },
		{ icon: whatsUppIcon, name: "Whats app" },
		{ icon: whatsUppIcon, name: "Whats app" },
		{ icon: whatsUppIcon, name: "Whats app" },
		{ icon: whatsUppIcon, name: "Whats app" },
		{ icon: whatsUppIcon, name: "Whats app" }
	];
	return (
		<div className={classes.socialMedia}>
			<h2>Contacts</h2>
			<form action="submit" className={classes.socialForm}>
				<input type="text" placeholder="Provide a link to your website " />
				<div className={classes.socialInput}>
					<div className={classes.socialInputIn}>
						<p>Provide a link to your whats app account</p>
						<img src={whatsUppIcon} alt="Whats app icon" />
					</div>
					<button>
						<img src={cancel} alt="cancel icon" />
					</button>
				</div>
				<p>Choose in which of these social networks you have an account</p>
				<div className={classes.socialContainers}>
					{social.map(item => (
						<div className={classes.socialCard}>
							<img src={item.icon} alt={item.name} />
							<h4>{item.name}</h4>
						</div>
					))}
				</div>
				<button className={classes.backButton}>Back</button>
				<button className={classes.nextButton}>Next</button>
			</form>
		</div>
	);
}

export default SocialMedia;
