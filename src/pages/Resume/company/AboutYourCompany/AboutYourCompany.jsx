import React from "react";
import "./style.scss";

function AboutYourCompany() {
	return (
		<div className="aboutYourCompany">
			<div className="aboutYourCompany__inner">
				<h2 className="aboutYourCompany__title">About your company</h2>
				<p className="aboutYourCompany__text">Write down some more information about your company</p>

				<form className="aboutYourCompany__form">
					<div className="aboutYourCompany__content">
						<h5 className="aboutYourCompany__subtitle">Location*</h5>
						<input className="aboutYourCompany__input" type="text" placeholder="Write a location" />

						<button className="aboutYourCompany__button">
							<ion-icon name="add-outline"></ion-icon>
						</button>
					</div>

					<div className="aboutYourCompany__wrapper">
						<h5 className="aboutYourCompany__subtitle">Description</h5>
						<input className="aboutYourCompany__description" type="text" placeholder="Write what your company do" />
					</div>

					<div className="aboutYourCompany__buttonWrapper">
						<button className="aboutYourCompany__back">Back</button>
						<button className="aboutYourCompany__next">Next</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AboutYourCompany;
