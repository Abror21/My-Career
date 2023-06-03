import React from "react";
import "./style.scss";
import MyCareerLogo from "../../../assets/images/Resume/my-career.svg";

function CareerSlider({dot, activeDote, classNameLine}) {
	const mediaWidth = window.innerWidth

	return (
		<div>
			<div className="mycareer">
					<img className="mycareer__image" src={MyCareerLogo} alt="My Career" />

					<div className="mycareer__text_box">
						<span className="mycareer__text">{activeDote.label}</span>
					</div>

					{
						(activeDote.id !== dot.length ) && <span className={classNameLine}></span>
					}

				<div className="mycareer__content">
					{
						dot.map((el,i) => (
							<React.Fragment key={i}>
								<div 
									className={`mycareer__round ${activeDote.label === el.label ? "mycareer__round--active" : ""}`}
									style={{top: activeDote.id === el.id ? mediaWidth > 1500 ? "150px" : "120px" : activeDote.id > el.id ? `${el.id === 1 ? el.id * 10 : el.id * 12 }px` : null }}
								>
								</div>
							</React.Fragment>
						))
					}
				</div>
			</div>
		</div>
	);
}

export default CareerSlider;
