import Round from "components/Round/Round.jsx";
import React from "react";
import classes from "./Background.module.scss";
import back from "../../../assets/images/Resume/back.png";
import CareerSlider from "../CareerSlider/CareerSlider";
import { useSelector } from "react-redux";
import "./Background.scss";
import { useDispatch } from "react-redux";
import { cards, dot } from "./information";
import { removeToken } from "reduxToolkit/loginSlice/LoginSlice";
import { activeDoteAction } from "reduxToolkit/resumeControlsSlice/resumeControls";

function Background() {
	const { activeCard } = useSelector(state => state.resumeControle);
	const {activeDote} = useSelector(state => state.resumeControle)

	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(
			activeDoteAction ([
				{id: 1,label: "Personal information"},
				{id: 1,label: "photo"}
			])
		);
		dispatch(removeToken()) 
		localStorage.clear()
	}
	return (
		<>
			<div className={classes.allBackground}>
				<div className="container">
					<div className={classes.allBackground_inner}>
						<div className={classes.backSign}>
							<button onClick={handleClick} className={classes.backSign_btn}>
								<img src={back} alt="back sign" />
								Back to sign up
							</button>

							<div className={classes.round}>
								<Round />
							</div>
						</div>

						<div className={classes.cards}>
							{cards.map(el => (
								<div
									className={`${classes.card_box} ${el.type === activeCard.type ? classes.active : ""}`}
									key={el.id}
									style={{ top: el.id < activeCard.id ? "-200%" : el.id === activeCard.id ? "12%" : "200%" }}>
									{el.label}
								</div>
							))}
						</div>

						<div className={classes.career}>
							<CareerSlider dot = {dot} activeDote = {activeDote} classNameLine="mycareer__line"/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Background;
