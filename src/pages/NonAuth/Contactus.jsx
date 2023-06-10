import classes from "./Contactus.module.scss";
import logosInstagram from "../../assets/images/icons/logos_telegram.png";
import logosWhatsapp from "../../assets/images/icons/logos_whatsapp.png";
import Input from "../../components/Input";
import { useInput } from "../../hooks/use-input/useInput";
import Textarea from "../../components/Textarea";
import { CONTACT_US } from "../../api/URLS";

function Contactus() {

	const {
		inputChange: nameInputChange,
		inputBlur: nameInputBlur,
		inputTouch: nameInputTouch,
		inputReset: nameInputReset,
		value: name,
		inputIsValid: nameIsValid,
		inputIsError: nameInputIsError
	} = useInput(name => name.trim().length !== 0)
	const {
		inputChange: emailInputChange,
		inputBlur: emailInputBlur,
		inputTouch: emailInputTouch,
		inputReset: emailInputReset,
		value: email,
		inputIsValid: emailIsValid,
		inputIsError: emailInputIsError
	} = useInput(email => email.includes('@'))
	const {
		inputChange: phoneInputChange,
		inputBlur: phoneInputBlur,
		inputTouch: phoneInputTouch,
		inputReset: phoneInputReset,
		value: phone,
		inputIsValid: phoneIsValid,
		inputIsError: phoneInputIsError
	} = useInput(phone => phone.length === 19)
	const {
		inputChange: textInputChange,
		inputBlur: textInputBlur,
		inputTouch: textInputTouch,
		inputReset: textInputReset,
		value: text,
		inputIsValid: textIsValid,
		inputIsError: textInputIsError
	} = useInput(text => text.trim().length > 10)

	const handleSubmit = e => {
		e.preventDefault();
		nameInputTouch();
		emailInputTouch();
		phoneInputTouch();
		textInputTouch();

		if (nameIsValid && emailIsValid && phoneIsValid && textIsValid) {
			fetch(CONTACT_US, {
				method: 'POST',
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					name,
					email,
					phone,
					textMessage: text
				})
			})
				.then(res => {
					if (res.ok) {
						nameInputReset();
						emailInputReset();
						phoneInputReset();
						textInputReset();
						alert('Data sent successfully')
					} else {
						throw Error('Something went wrong')
					}
				})
				.catch(err => alert(err.message))
		}
	}

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

					<form className={classes.contactUs} onSubmit={handleSubmit}>
						<h1 className={classes.contactUs__title}>Contact us</h1>
						<p className={classes.contactUs__desc}>Fill in the blank and we will contact you</p>
						<div className={classes.contactUs__content}>
							<Input
								type="text"
								placeholder="Name"
								inputIsError={nameInputIsError}
								value={name}
								inputChange={nameInputChange}
								inputBlur={nameInputBlur}
								errorMessage="Please enter valid name"
							/>
							<Input
								type="email"
								placeholder="Email"
								inputIsError={emailInputIsError}
								value={email}
								inputChange={emailInputChange}
								inputBlur={emailInputBlur}
								errorMessage="Please enter valid email"
							/>
							<Input
								mask="+\9\9\8 (99) 999-99-99"
								placeholder="Phone"
								inputIsError={phoneInputIsError}
								value={phone}
								inputChange={phoneInputChange}
								inputBlur={phoneInputBlur}
								errorMessage="Please enter phone number"
							/>
							<Textarea
								placeholder="Text message"
								inputIsError={textInputIsError}
								value={text}
								inputChange={textInputChange}
								inputBlur={textInputBlur}
								errorMessage="Text length should be at least 10 characters"
							/>
							<button type="submit">Send</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contactus;
