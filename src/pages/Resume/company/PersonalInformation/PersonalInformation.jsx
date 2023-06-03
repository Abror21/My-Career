import React from "react";
import "./style.scss";

function PersonalInformation() {
	return (
		<div className="companyInformation">
			<div className="companyInformation__inner">
				<h2 className="companyInformation__title">Welcome</h2>
				<p className="companyInformation__text">
					Complete your profile to join our global community of freelancers and start selling your services to our growing network of businesses.
				</p>

				<form className="companyInformation__form">
					<div className="companyInformation__content">
						<h5 className="companyInformation__subtitle">Firstname*</h5>
						<input className="companyInformation__input" type="text" placeholder="Write in your first name" />
					</div>

					<div className="companyInformation__content">
						<h5 className="companyInformation__subtitle">Lastname*</h5>
						<input className="companyInformation__input" type="text" placeholder="Write in your last name" />
					</div>

					<div className="companyInformation__content">
						<h5 className="companyInformation__subtitle">E-mail*</h5>
						<input className="companyInformation__input" type="text" placeholder="Abcdefg1234@inbox.com" />
					</div>

					<div className="companyInformation__content">
						<h5 className="companyInformation__subtitle">Phone Number*</h5>
						<input className="companyInformation__input" type="text" placeholder="+XXX (XX) XXX-XX-XX" />
					</div>
				</form>
				<div className="companyInformation__wrapper">
					<button className="companyInformation__next">Next</button>
				</div>
			</div>
		</div>
	);
}

export default PersonalInformation;
