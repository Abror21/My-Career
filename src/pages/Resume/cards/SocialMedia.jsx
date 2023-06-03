import React, {useState} from "react";
import downIcon from "../../../assets/images/Resume/down.png";
import classes from "./SocialMedia.module.scss";
import telgramIcon from "../../../assets/images/Resume/telegramIcon.png";
import whatsUppIcon from "../../../assets/images/Resume/whatsUppIcon.png";
import twitterIcon from "../../../assets/images/Resume/twitterIcon.png";
import facebookIcon from "../../../assets/images/Resume/faceBookIcon.png";
import instagramIcon from "../../../assets/images/Resume/instagramIcon.png";
import githubIcon from "../../../assets/images/Resume/githubIcon.png";
import cancel from "../../../assets/images/Resume/cancel.png";
import { useDispatch } from "react-redux";
import { activeDoteAction } from "reduxToolkit/resumeControlsSlice/resumeControls";
import { socialStep } from "reduxToolkit/frilanserCardSlice/frilanserCardSlice";

function SocialMedia() {
	const dispatch = useDispatch();
	const [data, setData] = useState({
		website: "",
		WatsApp: "",
		Facebook: "",
		Instagram: "",
		Telegram: "",
		GitHub: "",
		Twitter: ""
	});

	const [icons, setIcons] = useState([]);
	const [socials, setSocials] = useState([
		{ icon: whatsUppIcon, name: "WatsApp" },
		{ icon: facebookIcon, name: "Facebook" },
		{ icon: instagramIcon, name: "Instagram" },
		{ icon: telgramIcon, name: "Telegram" },
		{ icon: githubIcon, name: "GitHub" },
		{ icon: twitterIcon, name: "Twitter" }
	]);

	const addInputContact = (i, n) => {
		setIcons([...icons, { icon: i, name: n }]);
		let filteredSocial = [];
		for (let i = 0; i < socials.length; i++) {
			if (socials[i].name !== n) {
				filteredSocial.push(socials[i]);
			}
		}
		setSocials(filteredSocial);
	};

	const handleSubmitting = event => {
		event.preventDefault();
	};

	const removeIput = (name, icon) => {
		let filteredIcons = [];
		for (let i = 0; i < icons.length; i++) {
			if (icons[i].name !== name) {
				filteredIcons.push(icons[i]);
			}
		}
		setIcons(filteredIcons);
		setSocials([...socials, { icon: icon, name: name }]);
	};

	const handleChangeInput = ({ label, value }) => {
		setData(prev => ({ ...prev, [label]: value }));
	};

	const handleSubmit = event => {
		event.preventDefault();
		dispatch(socialStep(data));
		dispatch(activeDoteAction([{ id: 8, label: "Resume" }, { id: 8, type: "resume" }]));
	};

	const prevPgae = event => {
		event.preventDefault();
		dispatch(activeDoteAction([{ id: 6, label: "Educations" }, { id: 6, type: "education" }]));
	};

	return (
		<div className={classes.socialMedia}>
			<h2>Contacts</h2>
			<form action="submit" className={classes.socialForm} onSubmit={handleSubmit}>
				<div className={classes.forim_content}>
					<input
						className={classes.website_input}
						type="text"
						placeholder="Provide a link to your website "
						value={data.website}
						onChange={e => setData(prev => ({ ...prev, website: e.target.value }))}
					/>
					{icons &&
						icons.map(item => (
							<div key={item.name} className={classes.socialInput}>
								<div className={classes.socialInputIn}>
									<input
										type="url"
										placeholder={`Provide a link to your ${item.name} account`}
										value={data[item.name]}
										onChange={e => handleChangeInput({ value: e.target.value, label: item.name })}
									/>
									<img className={classes.insideIconImage} src={item.icon} alt="Whats app icon" />
								</div>
								<button
									className={classes.cancelButton}
									onClick={event => {
										removeIput(item.name, item.icon);
										handleSubmitting(event);
									}}>
									<img className={classes.cancelButton_img} src={cancel} alt="cancel icon" />
								</button>
							</div>
						))}
					<p>Choose in which of these social networks you have an account</p>
					<div className={classes.socialContainers}>
						{socials.map(item => (
							<div key={item.name} style={{ cursor: "pointer" }} className={classes.socialCard} onClick={() => addInputContact(item.icon, item.name)}>
								<img style={{ width: "40px" }} src={item.icon} alt={item.name} />
								<h4 className={classes.cart_text}>{item.name}</h4>
							</div>
						))}
					</div>
				</div>
				<div className={classes.button_group}>
					<button className={classes.backButton} type="button" onClick={prevPgae}>
						Back
					</button>
					<button type="submit" className={classes.nextButton}>
						Next
					</button>
				</div>
			</form>
		</div>
	);
}

export default SocialMedia;
