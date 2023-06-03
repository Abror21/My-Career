import React from "react";
import "./style.scss";

function YourCompany() {
	return (
		<div className="yourCompany">
			<div className="yourCompany__inner">
				<h2 className="yourCompany__title">Your company!</h2>

				<form className="yourCompany__form">
					<div className="yourCompany__imageWrapper">
						<div className="yourCompany__image"></div>
						<p className="yourCompany__text">Add your company photo</p>
					</div>

					<div className="yourCompany__content">
						<h5 className="yourCompany__subtitle">Company name</h5>
						<input className="yourCompany__input" type="text" placeholder="Name your company" />
					</div>

					<div className="yourCompany__wrapper">
						<h5 className="yourCompany__subtitle">Number</h5>
						<input className="yourCompany__input" type="text" placeholder="Company phone number" />
					</div>

					<div className="yourCompany__buttonWrapper">
						<button className="yourCompany__back">Back</button>
						<button className="yourCompany__next">Next</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default YourCompany;
