import React from "react";
import corPic1 from "../img/corPic1.png";
import corPic2 from "../img/corPic2.png";
import resumebg2 from "../img/resumebg2.png";
import resume3bg2 from "../img/resume3bg2.png";
import fiveSidedIcon from "../img/five-sided-icon.png";
const Resume3 = ({ phoneNumber, bio, experiences, email, freelancerContact, defaultuserImage, educations, freelancerPosition, firstName, lastName }) => {
	return (
		<>
			<div className="ComplateResume">
				<div className="resume2_3 resume-watch">
					<div className="resume2_3-left">
						<div className="resume2_3-left-top">
							<img className="corPic1" src={corPic2} alt="img1" />
							<img className="corPic2" src={corPic1} alt="img1" />
							<img className="userPic" src={defaultuserImage} alt="img1" />
						</div>
						<div className="resume2_3-left-bottom">
							<div className="resume2_3-left-bottom-contacts">
								<div>
									{" "}
									<span className="bottom-contacts-icon"> p </span> <span>{phoneNumber}</span>
								</div>
								<div>
									{" "}
									<span className="bottom-contacts-icon"> m </span> <span>{email}</span>
								</div>
								<div>
									{" "}
									<span className="bottom-contacts-icon"> w </span> <span>{freelancerContact?.webSite}</span>
								</div>
							</div>

							<div className="resume2_3-bottom-title title-bg-cl1">skills</div>

							<div className="resume2_3-left-bottom-skills">
								{freelancerPosition?.map((item, i) => {
									return (
										<div className="bottom-skills-item" key={i + 1}>
											<p className="skills-text">{item.name}</p>
											<p className="skills-level" />
										</div>
									);
								})}
								<div className="bottom-skills-item">
									<p className="skills-text">React</p>
									<p className="skills-level" />
								</div>
								<div className="bottom-skills-item">
									<p className="skills-text">Node JS</p>
									<p className="skills-level" />
								</div>
								<div className="bottom-skills-item">
									<p className="skills-text">Redux</p>
									<p className="skills-level" />
								</div>
							</div>
							{/* languages start */}

							<div className="resume2_3-bottom-title title-bg-cl1">Languages</div>
							{/* {educations?.map((item, i) => {
								return (
									<div className="resume2_3-left-bottom-degree" key={i + 1}>
										<b>{item?.degree}</b>
										<br />
										<span>{item?.name}</span>
										<br />
										<span>
											{item?.dateFrom?.substring(0, 4)} - {item?.dateTo?.substring(0, 4)}
										</span>
									</div>
								);
							})} */}
							<div className="resume2_3-left-bottom-languages">
								<div className="bottom-languages-item">
									<p className="languages-text">English - A1 level</p>
								</div>

								<div className="bottom-languages-item">
									<p className="languages-text">English - A1 level</p>
								</div>

								<div className="bottom-languages-item">
									<p className="languages-text">English - A1 level</p>
								</div>

								<div className="bottom-languages-item">
									<p className="languages-text">English - A1 level</p>
								</div>
							</div>
							{/* Hobbies start */}
							<div className="resume2_3-bottom-title title-bg-cl1">Hobbies</div>
							{/* {educations?.map((item, i) => {
								return (
									<div className="resume2_3-left-bottom-degree" key={i + 1}>
										<b>{item?.degree}</b>
										<br />
										<span>{item?.name}</span>
										<br />
										<span>
											{item?.dateFrom?.substring(0, 4)} - {item?.dateTo?.substring(0, 4)}
										</span>
									</div>
								);
							})} */}
							<div className="resume2_3-left-bottom-hobbies">
								<div className="bottom-hobbies-item">
									<p className="hobbies-text">Footbal</p>
								</div>

								<div className="bottom-hobbies-item">
									<p className="hobbies-text">Footbal</p>
								</div>

								<div className="bottom-hobbies-item">
									<p className="hobbies-text">Footbal</p>
								</div>

								<div className="bottom-hobbies-item">
									<p className="hobbies-text">Footbal</p>
								</div>
							</div>

							{/* Contact start */}
							<div className="resume2_3-bottom-title title-bg-cl1">Contact</div>
							{/* <div className="resume2_3-left-bottom-contacts">
								<div>
									{" "}
									<span className="bottom-contacts-icon"> p </span> <span>{phoneNumber}</span>
								</div>
								<div>
									{" "}
									<span className="bottom-contacts-icon"> m </span> <span>{email}</span>
								</div>
								<div>
									{" "}
									<span className="bottom-contacts-icon"> w </span> <span>{freelancerContact?.webSite}</span>
								</div>
							</div> */}
							<div className="resume2_3-left-bottom-contacts-2">
								<div>
									<span className="bottom-contacts-icon"> W </span> <span>Abdurashid7008</span>
								</div>
								<div>
									<span className="bottom-contacts-icon"> F </span> <span>Abdurashid7008</span>
								</div>
								<div>
									<span className="bottom-contacts-icon"> I </span> <span>Abdurashid7008</span>
								</div>
							</div>
						</div>
					</div>

					<div className="resume2_3-right">
						<div className="resume2_3-right-top">
							<img className="right-top-img" src={resumebg2} alt="background img" />
							<div className="resume2_3-right-top-name">
								{firstName} {lastName}
							</div>

							<div>
								<div className="resume2_3-right-top-job">{freelancerPosition?.name}</div>
								<div className="resume2_3-right-top-just" />
								<img src={resume3bg2} alt="img" />
							</div>
						</div>

						<div className="resume2_3-right-bottom">
							<div className="resume2_3-bottom-title title-bg-cl1">About Me</div>
							<div className="resume2_3-right-bottom-profile">{bio}</div>
							<div className="resume2_3-right-bottom-profile">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit natus nisi distinctio inventore assumenda suscipit facilis quidem reprehenderit
								nesciunt numquam.
							</div>
							{/* education */}
							<div className="resume2_3-bottom-title title-bg-cl2">Education </div>
							{educations?.map((item, i) => {
								return (
									// <div className="resume2_3-right-bottom-cd" key={i + 1}>
									// 	<div className="bottom-cd-1">
									// 		<b>{item.job}</b>{" "}
									// 		<span>
									// 			{item?.dateFrom?.substring(0, 4)} - {item?.dateTo?.substring(0, 4)}
									// 		</span>
									// 	</div>

									// 	<div className="bottom-cd-2">{item?.companyName}</div>

									// 	<div className="bottom-cd-3">{item?.description}</div>
									// </div>
									<></>
								);
							})}
							<div className="resume2_3-right-bottom-cd">
								<img className="resume2_3-right-bottom-five-side-icon" src={fiveSidedIcon} alt="fiveSidedIcon" />

								<div className="bottom-cd-1">
									<b>FrontEnd</b> <span>2004-2013</span>
								</div>

								<div className="resume2_3-right-bottom-content">
									<div className="bottom-cd-2">Napa</div>
									<div className="bottom-cd-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nisi?</div>
								</div>
							</div>
							{/* experience */}
							<div className="resume2_3-bottom-title title-bg-cl2">Experience </div>
							{/* {experiences?.map((item, i) => {
								return (
									<div className="resume2_3-right-bottom-cd" key={i + 1}>
										<div className="bottom-cd-1">
											<b>{item.job}</b>{" "}
											<span>
												{item?.dateFrom?.substring(0, 4)} - {item?.dateTo?.substring(0, 4)}
											</span>
										</div>
										<div className="bottom-cd-2">{item?.companyName}</div>
										<div className="bottom-cd-3">{item?.description}</div>
									</div>
								);
							})} */}
							<div className="resume2_3-right-bottom-cd">
								<img className="resume2_3-right-bottom-five-side-icon" src={fiveSidedIcon} alt="fiveSidedIcon" />

								<div className="bottom-cd-1">
									<b>FrontEnd</b> <span>2004-2013</span>
								</div>

								<div className="resume2_3-right-bottom-content">
									<div className="bottom-cd-2">Napa</div>
									<div className="bottom-cd-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nisi?</div>
								</div>
							</div>
							<div className="resume2_3-right-bottom-cd">
								<img className="resume2_3-right-bottom-five-side-icon" src={fiveSidedIcon} alt="fiveSidedIcon" />

								<div className="bottom-cd-1">
									<b>FrontEnd</b> <span>2004-2013</span>
								</div>

								<div className="resume2_3-right-bottom-content">
									<div className="bottom-cd-2">Napa</div>
									<div className="bottom-cd-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nisi?</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume3;
