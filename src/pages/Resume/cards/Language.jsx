import React, { useEffect } from "react";
import classes from "./Language.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import "./styles.scss";
import cancel from "../../../assets/images/Resume/cancel.png";
import { languageUpload, languages } from "reduxToolkit/extraReducers";
import { activeDoteAction } from "reduxToolkit/resumeControlsSlice/resumeControls";


function Language() {
	const dispatch = useDispatch();
	const languageList = useSelector(state => state.resume.languageList);
	// const [data,setData] = useState({LanguageId: null, lavel:"",})
	const [theArray, setTheArray] = useState([]);
	const [userLang, setUserLang] = useState([]);
	const [userLevel, setUserLevel] = useState([]);

	let level = [
		{ value: "A1 - Beginner", label: "A1 - Beginner" },
		{ value: "A2 - Elementary", label: "A2 - Elementary" },
		{ value: "B1 - Intermediate", label: "B1 - Intermediate" },
		{ value: "B2 - Upper-Intermediate", label: "B2 - Upper-Intermediate" }
	];

	let singleLang = true;
	if (theArray.length > 1) {
		singleLang = false;
	}

	const removeLang = id => {
		let newLang = [];
		for (let i = 0; i < theArray.length; i++) {
			if (theArray[i].id !== id) {
				newLang.push(theArray[i]);
			}
		}
		setTheArray(newLang);
	};

	const handleSubmit = event => {
		let formdatas = new FormData();
		console.log(formdatas);
		for (let i = 0; i < theArray.length; i++) {
			formdatas.append("LanguageId", userLang[i]);
			formdatas.append("Level", userLevel[i]);
		}
		// dispatch(languageUpload(formdatas));
		event.preventDefault();
		dispatch(
			activeDoteAction([
				{ id: 5, label: "Experience" },
				{ id: 5, type: "workexperience" }
			])
		);
	}


	const prevPage = () => {
		dispatch(
			activeDoteAction([
				{ id: 3, label: "yourself" },
				{ id: 3, type: "About yourself and skills" }
			])
		);
	};

	useEffect(() => {
		dispatch(languages())
	}, [])
	return (
		<div className={classes.languageCard}>
			<h2>Write what languages you speak</h2>
			<p>
				The more languages ​​you know, <br /> the more foreign employers will contact you.
			</p>
			<form action="submit" className={classes.languageForm} onSubmit={handleSubmit}>
				<label htmlFor="laguages">Language*</label>
				<div className={classes.select_box}>
					{theArray.map(lang => (
						<div key={lang.id} id={!singleLang ? "test" : null} className={classes.select}>
							<Select
								className="languageSelect"
								// classNamePrefix="mySelectLang"
								// isOptionDisabled = {isOptionDisabled}
								options={languageList?.map(el => ({ value: el.id, label: el.name }))}
								placeholder="Language*"
								onChange={choice => setUserLang([...userLang, choice.value])}
							/>
							<Select
								className="languageSelect"
								// classNamePrefix="mySelectLang"
								options={level}
								placeholder="Level*"
								onChange={choice => setUserLevel([...userLevel, choice.value])}
							/>
							{!singleLang && (
								<div className={classes.cancelLang} onClick={() => removeLang(lang.id)}>
									<img src={cancel} alt="cancel" />
								</div>
							)}
						</div>
					))}
				</div>

				<div
					style={{ cursor: "pointer" }}
					className={classes.addLanguage}
					onClick={() => {
						setTheArray(oldArray => [...theArray, { test: "test", test2: "test2", id: Math.floor(Math.random() * 10) }]);
					}}>
					+ Add Language
				</div>
				<div className={classes.languageCard_btn}>
					<button className={classes.backButton} type="button" onClick={prevPage}>
						Back
					</button>
					<button className={classes.nextButton}>Next</button>
				</div>
			</form>
		</div>
	);
}

export default Language;
