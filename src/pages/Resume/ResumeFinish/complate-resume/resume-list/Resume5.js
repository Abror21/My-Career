import React from "react";
import whatsUpIcon from "../img/whatsap.svg";
import instagramIcon from "../img/instagram.svg";

const Resume5 = props => {
	const { phoneNumber, bio, experiences, email, freelancerHobbies, defaultuserImage, educations, freelancerPosition, firstName, lastName, address } = props;
	return (
		<>
			<div className="ComplateResume">
				<div className="resume2_5 resume-watch">
					<div className="resume2_5__top-contents">
						<div className="resume2_5-top-left">
							<div className="resume2_5-top-left-name">
								<span className="resume2_5-firstname">{firstName} Abdurashid</span>
								<br />
								<span className="resume2_5-lastname">{lastName} Agzamov</span>
								<p className="resume2_5-job">Frontend devoloper</p>
								<div className="resume2_5-top-left-contact">
									<div className="resume2_5-top-left-contact-item">
										<p>Phone</p>
										<span>+998 95 004 58 96</span>
									</div>

									<div className="resume2_5-top-left-contact-item">
										<p>E-mail</p>
										<span>user@gmail.com</span>
									</div>

									<div className="resume2_5-top-left-contact-item">
										<p>Address</p>
										<span>Taskkent Uchtepa Kokcha-oqtepa pr3 344</span>
									</div>
								</div>
							</div>
						</div>

						<div className="resume2_5-top-right">
							<div className="resume2_5-user-img">
								<img src={defaultuserImage} alt={firstName} />
							</div>
						</div>
					</div>

					<div className="resume2_5-bottom">
						<div className="resume2_5-bottom-left">
							<div className="resume2_5-bottom-left-wrapper">
								<div className="resume2_5-bottom-title res2_5_color1">Skills</div>
								<ul className="resume2_5-bottom-text-div">
									<li>
										<p>Figma</p>
									</li>
									<li>
										<p>Figma</p>
									</li>
									<li>
										<p>Figma</p>
									</li>
								</ul>
								<div className="resume2_5-bottom-title res2_5_color1">education</div>
								<ul className="resume2_5-bottom-text-div">
									{educations?.map((item, i) => {
										return (
											<li key={i + 1}>
												<b>{item?.degree} </b>
												<p>{item?.name}</p>
												<span>
													{item?.dateFrom?.substring(0, 4)} - {item?.dateTo?.substring(0, 4)}
												</span>
											</li>
										);
									})}

									<li>
										<b>Elementry</b>
										<p>Yamato</p>
										<span>2010 - 2018</span>
									</li>
								</ul>

								<div className="resume2_5-bottom-title res2_5_color1">experience</div>

								<div className="resume2_5-bottom-text-div">
									<div className="resume2_5-bottom-text">
										<b>Frontend</b>
										<br />
										<br />
										<div>
											<span className="resume2_5-year">2010-2022</span>
											<span>Google</span>
										</div>
										<br />
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto nulla recusandae nesciunt fuga dolorum explicabo molestiae
											error eaque officiis debitis distinctio vitae a, itaque aliquid accusantium tempore quas reprehenderit.
										</p>
									</div>
								</div>

								<div className="resume2_5-bottom-title res2_5_color1">Languages</div>
								<ul className="resume2_5-bottom-circles">
									{freelancerPosition?.map((item, i) => {
										return (
											<li className="resume2_5-bottom-circle" key={i + 1}>
												<span>{item.name}</span>
											</li>
										);
									})}
									<li className="resume2_5-bottom-circle">
										<span>French</span>
									</li>
									<li className="resume2_5-bottom-circle">
										<span>English</span>
									</li>
									<li className="resume2_5-bottom-circle">
										<span>Russia</span>
									</li>
									<li className="resume2_5-bottom-circle">
										<span>Uzbek</span>
									</li>
								</ul>

								<div className="resume2_5-bottom-title res2_5_color1">Contact</div>

								<div className="resume2_5-bottom-text-div">
									<div className="resume2_5-bottom-text-contact">
										<div className="resume2_5-bottom-text-contact-item">
											<img src={whatsUpIcon} alt="whatsup" />
											<p>kingdev7008</p>
										</div>
										<div className="resume2_5-bottom-text-contact-item">
											<img src={whatsUpIcon} alt="whatsup" />
											<p>kingdev7008</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="resume2_5-bottom-right">
							<div className="resume2_5-bottom-right-wrapper">
								<div className="resume2_5-bottom-title res2_5_color2">About me</div>
								<div className="resume2_5-bottom-right-text">
									<p>{bio}</p>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio dolor possimus explicabo natus? Inventore, eos voluptates repudiandae non
										quia, repellendus deleniti necessitatibus, magnam perspiciatis adipisci accusamus architecto sapiente aspernatur minima.
									</p>
								</div>

								<div className="resume2_5-bottom-title res2_5_color2">hobbies</div>
								<ul className="resume2_5-bottom-right-hobbies">
									{freelancerHobbies?.map((item, i) => {
										return (
											<li key={i + 1}>
												<p>{item.name}</p>
												<p>React</p>
											</li>
										);
									})}
									<li>
										<p>React</p>
									</li>
									<li>
										<p>React</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume5;
