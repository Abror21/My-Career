import React, { useEffect } from "react";
import "./Photo.scss";
import Select from "react-select";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { secondStep } from "../../../reduxToolkit/frilanserCardSlice/frilanserCardSlice";
import { activeDoteAction } from "reduxToolkit/resumeControlsSlice/resumeControls";
import { countryUpload, hobbies, positions, getFreelancer, getCountryList, getRegionsList } from "../../../reduxToolkit/extraReducers";

function Country() {
	const dispatch = useDispatch();
	const street = useRef("");
	const { firstName } = useSelector(state => state.frilanserCardSlice.freelancer);
	const [userChoice, setUserChoice] = useState([0]);
	const [userChoice2, setUserChoice2] = useState(0);
	const countryList = useSelector(state => state.resume.countryList);
	const regionsList = useSelector(state => state.resume.regionsList)
	let options = [];

	useEffect(() => {
		dispatch(getRegionsList(userChoice[0]))
	}, [userChoice])


	let optionsRegion = []
	for (let i = 0; i < countryList.length; i++) {
		options.push({ value: [countryList[i].id, countryList.indexOf(countryList[i])], label: countryList[i].name });
	}
	for (let i = 0; i < regionsList.length; i++) {
		optionsRegion.push({ value: [regionsList[i].id, regionsList.indexOf(regionsList[i])], label: regionsList[i].name });
	}
    const [data, setData]= useState({
		countryId:1,
		country:2,
		street:""
	})

	const handleSubmit = event => {
			console.log("step1");
			dispatch(secondStep(data));
			dispatch(
				activeDoteAction([
					{ id: 3, label: "About yourself and skills" },
					{ id: 3, type: "yourself" }
				])
			);
		

		event.preventDefault();
	};
	// console.log(options)
	const removePage = event => {
		event.preventDefault();
		dispatch(
			activeDoteAction([
				{ id: 1, label: "Personal information" },
				{ id: 1, type: "photo" }
			])
		);
	};

	return (
		<div className="countryCard">
			<div className="country">
				<form className="country__form" onSubmit={handleSubmit}>
					<h2 className="country__title">Welcome {firstName}</h2>
					<p className="country__text">
						Complete your profile to join our global community of freelancers and start selling your services to our growing network of businesses.
					</p>
					<div className="country__content">
						<h5 className="country__subtitle">Living address</h5>
						<div className="country__wrapper">
							<div className="country__info">
								<Select classNamePrefix="mySelect" options={options} placeholder="Country*" onChange={choice => setUserChoice(choice.value)} />
							</div>
							<div className="country__info">
								<Select
									classNamePrefix="mySelect"
									options={optionsRegion}
									placeholder="Region*"
									onChange={choice => setUserChoice2(choice.value)}
								/>
							</div>
						</div>
						<input onChange={e=>setData(e.target.value)} className="country__inputStreet" type="text" placeholder="Street, apartment" />
					</div>
					<div className="country__button">
						<button className="country__back" type="button" onClick={removePage}>
							Back
						</button>
						<button className="country__next" type="submit">
							Next
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Country
