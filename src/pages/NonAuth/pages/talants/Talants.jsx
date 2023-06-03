import React from "react";
import LoginDesc from "../LoginDesc";
import classes from "./Talants.module.scss";
import TalantsDesc from "./TalantsDesc";

function Talants(props) {
	return (
		<div className={classes.talants}>
			<div className="container">
				<div className={classes.talants__container}>
					<TalantsDesc />
					<LoginDesc />
				</div>
			</div>
		</div>
	);
}

export default Talants;
