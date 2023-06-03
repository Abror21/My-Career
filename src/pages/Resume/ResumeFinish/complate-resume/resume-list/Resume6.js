import React from "react";
import phone from "../img/phone.svg";
import loc from "../img/location.svg";
import letter from "../img/letter.svg";
import { resumeTriple } from "../../../../../assets/images/index";

const Resume6 = props => {
	const {
		phoneNumber,
		bio,
		experiences,
		email,
		freelancerContact,
		defaultuserImage,
		educations,
		freelancerPosition,
		freelancerHobbies,
		firstName,
		lastName,
		address,
		userLanguages
	} = props;
	return (
		<>
			<div className="ComplateResume">
				<div className="resume2_6 resume-watch">
					<div className="resume2_6-top">
						<div className="resume2_6-top-left">
							<div className="resume2_6-top-left-name">
								<p className="resume2_6-top-left-user-name">
									{firstName} {lastName}
								</p>
								<p className="resume2_6-top-left-user-job">{freelancerPosition?.name}</p>
							</div>

							<div className="resume2_6-top-left-user-contact">
								<p className={"subTitle"}>
									<img src={phone} alt={phone} />
									{phoneNumber}
								</p>
								<p className={"subTitle"}>
									<img src={letter} alt={email} />
									{email}
								</p>
								<p className={"subTitle"}>
									<img src={loc} alt={loc} />
									{address?.countryName} {address?.regionName} {address?.home}
								</p>
							</div>
						</div>

						<div className="resume2_6-top-right">
							<img className="resume2_6-top-right-img" src={defaultuserImage} />
						</div>
					</div>

					<div className="resume2_6-bottom">
						<div className="resume2_6-bottom-left">
							<p className="resume2_6-bottom-title">about me</p>
							<div className="resume2_6-bottom-left-text">
								<span className={"subTitle"}>{bio}</span>
							</div>

							<div className="resume2_6-bottom-title">language</div>
							<div className="resume2_6-bottom-left-text">
								<div className="language-lvl">
									{userLanguages?.map((item, i) => (
										<React.Fragment key={i + 1}>
											<p className={"subTitleUp"}>{item?.language}</p>
											<span className="resume2_6-cirlces" />
											<span className="resume2_6-cirlces" />
											<span className="resume2_6-cirlces" />
											<span className="resume2_6-cirlces" />
											<span className="resume2_6-cirlces" />
											<span className="resume2_6-cirlces" />
											<span className="resume2_6-cirlces" />
										</React.Fragment>
									))}
								</div>
							</div>

							<div className="resume2_6-bottom-title">skills</div>
							<div className="resume2_6-bottom-left-text">
								{freelancerPosition?.map((item, i) => {
									return (
										<div key={i + 1}>
											<p className={"subTitleUp"}>{item.name}</p>
										</div>
									);
								})}
							</div>

							<div className="resume2_6-bottom-title">hobbies</div>
							<div className="resume2_6-bottom-left-text">
								{freelancerHobbies?.map((item, i) => {
									return (
										<div key={i + 1}>
											<p className={"subTitleUp"}>{item.name}</p>
										</div>
									);
								})}
								<div />
							</div>
						</div>

						<div className="resume2_6-bottom-right">
							<div className="resume2_6-bottom-title">education</div>
							<div className="resume2_6-bottom-left-text">
								{educations?.map((item, i) => {
									return (
										<div className={"resume-6"}>
											<div className={"resume-6__about"}>
												<div className={"about__img"}>
													<img src={resumeTriple} alt={"triple"} />
												</div>
												<div>
													<p className={"about__study subTitleUp"}>{item.degree}</p>
													<p className={"about__name subTitleUp"}>{item.degree}</p>
												</div>
											</div>
											<p className={"subTitle"}>{item.bio}</p>
										</div>
									);
								})}
							</div>

							<div className="resume2_6-bottom-title">experience</div>
							<div className="resume2_6-bottom-left-text">
								{experiences?.map((item, i) => {
									return (
										<div className={"resume-6"}>
											<div className={"resume-6__about"}>
												<div className={"about__img"}>
													<img src={resumeTriple} alt={"triple"} />
												</div>
												<div>
													<p className={"about__study subTitleUp"}>{item.degree}</p>
													<p className={"about__name subTitleUp"}>{item.degree}</p>
												</div>
											</div>
											<p className={"subTitle"}>{bio}</p>
										</div>
									);
								})}
							</div>
							<div className="resume2_6-bottom-title">contacts</div>
							<div className="resume2_6-bottom-left-text">
								{experiences?.map((item, i) => {
									return (
										<span className="subTitle resume2_6-bottom-left-text" key={i + 1}>
											{item.name}
										</span>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume6;
