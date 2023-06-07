import React from "react";
import classes from "./CircleSlider.module.scss";
import lineV from "../../assets/images/lineV.png";

function CircleSlider({ count, setCount }) {
	return (
		<div className={classes.circles}>
			<div className={classes.circles__container}>
				<div className={count === 1 || count === 2 || count === 3 || count === 4 ? classes.circleSlider : classes.circleSliderHide}>
					<div className={count === 1 ? classes.dotactive : classes.dot} onClick={() => setCount(1)}></div>
					<img src={lineV} alt="line vertical" />
					<div className={count === 2 ? classes.dotactive : classes.dot} onClick={() => setCount(2)}></div>
					<img src={lineV} alt="line vertical" />
					<div className={count === 3 ? classes.dotactive : classes.dot} onClick={() => setCount(3)}></div>
					<img src={lineV} alt="line vertical" />
					<div className={count === 4 ? classes.dotactive : classes.dot} onClick={() => setCount(4)}></div>
				</div>
			</div>
		</div>
	);
}

export default CircleSlider;
