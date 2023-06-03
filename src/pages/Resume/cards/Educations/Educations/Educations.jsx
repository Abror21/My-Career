import React from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { activeDoteAction } from "reduxToolkit/resumeControlsSlice/resumeControls";
import { educationDelete, educationGet, educationGetIsSuccess } from "reduxToolkit/extraReducers";
import { useState } from "react";
import { ReactComponent as Trash } from "../../../../../assets/images/icons/trash.svg";
import { ReactComponent as Edit } from "../../../../../assets/images/icons/edit.svg";
import AddEducations from "../AddEducations/AddEducations";

const defaultData = {
	name: "",
	degree: "",
	typeOfStudy: "",
	location: "",
	currentStudy: false,
	dateDrom: "",
	dateTo: ""
};

function Educations() {
	const [isMoadalActive, setMoadalActive] = useState({ educationAdd: false, educationEdit: false });
	const [editData, setEditData] = useState({});
	const dispatch = useDispatch();
	const { educationPostIsSuccess, educationList, educationDeleteIsSuccess, loading } = useSelector(state => state.resume);
	useEffect(
		() => {
			dispatch(educationGet());
		},
		[educationGet, educationPostIsSuccess]
	);
	console.log(educationList);

	const [test, setTest] = useState();

	const changeEducation = value => {
		setEditData(value.data);
		setMoadalActive(prev => ({ ...prev, educationEdit: value.modal }));
	};

	const changePage = e => {
		e.preventDefault();
		dispatch(activeDoteAction([{ id: 5, label: "Experience" }, { id: 5, type: "workexperience" }]));
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(activeDoteAction([{ id: 7, label: "Contacts" }, { id: 7, type: "media" }]));
	};

	const [trashHover, setTrashHover] = useState(false);
	const [editHover, setEditHover] = useState(false);

	const TrashFunc = int => {
		setTrashHover(int);
	};

	const EditFunc = int => {
		setEditHover(int);
	};

	if (loading) {
		return <b>Loading...</b>;
	}
	const deleteEducation = id => {
		dispatch(educationDelete(id));
	};

	const TypeOptions = [{ value: "online", label: "online", id: 1 }, { value: "offline", label: "offline", id: 2 }];
	const option = [
		{ value: "Sredniy", label: "sredniy", id: 1 },
		{ value: "Vishiy", label: "vishiy", id: 2 },
		{ value: "Bachelour", label: "Bachelour", id: 3 }
	];

	function updateToTypeOption(type) {
		if (type === 1) {
			return "online";
		} else if (type === 2) {
			return "offline";
		}
	}

	function updateIdToStudy(study) {
		if (study === 1) {
			return "sredniy";
		} else if (study === 2) {
			return "vishiy";
		} else if (study === 3) {
			return "bachelour";
		}
	}

	return (
		<>
			<div className="educations">
				<div className="educations__inner">
					<form onSubmit={handleSubmit}>
						<h2 className="educations__title">Educations</h2>
						<p className="educations__text">
							<span className="educations__textSpan">Freelancers who add their experience are twice as likely to win work.</span>
							<span className="educations__textSpan">But if you're just starting out, you can still create a greatprofile.</span>
							<span className="educations__textSpan">Just head on to the next page.</span>
						</p>
						<div className="educations__box">
							{educationList.map((el, int) => (
								<div className="educations__content" key={el.id}>
									<div className="educations__texts">
										<span className="educations__subtitle">{el.name}</span>
										<div className="educations__study">
											<span className="educations__span">
												{updateIdToStudy(el.typeOfStudy)}
												{test}
											</span>
											<span className="educations__telecommunication">{updateToTypeOption(el.degree)}</span>
										</div>
									</div>

									<div className="educations__icons">
										<span className="educations__icon--create" type="button" onClick={() => changeEducation({ data: el, modal: true })}>
											<Edit
												name="create-outline"
												className={`${editHover === int ? "experience__box__hovering" : "updatePhoto"}`}
												onClick={() => EditFunc(int)}
											/>
										</span>

										<span className="educations__icon--delete" onClick={() => deleteEducation(el.id)}>
											<Trash
												name="trash-outline"
												className={`${trashHover === int ? "experience__box__hoveringT" : "updatePhoto"}`}
												onClick={() => TrashFunc(int)}
											/>
										</span>
									</div>
								</div>
							))}
						</div>

						<div className="educations__wrapper">
							<button
								style={{ cursor: "pointer" }}
								type="button"
								className="educations__buttonAdd"
								onClick={() => setMoadalActive(prev => ({ ...prev, educationAdd: true }))}>
								+ Add new
							</button>
						</div>

						<div className="educations__button">
							<button className="educations__back" type="button" onClick={changePage}>
								Back
							</button>
							<button className="educations__next" type="submit">
								Next
							</button>
						</div>
					</form>
				</div>
			</div>
			{isMoadalActive.educationAdd && (
				<AddEducations
					updateIdToStudy={updateIdToStudy}
					updateToTypeOption={updateToTypeOption}
					TypeOptions={TypeOptions}
					option={option}
					removeModal={setMoadalActive}
					defaultInputData={{ ...defaultData, type: "add" }}
				/>
			)}
			{isMoadalActive.educationEdit && (
				<AddEducations
					updateIdToStudy={updateIdToStudy}
					updateToTypeOption={updateToTypeOption}
					TypeOptions={TypeOptions}
					option={option}
					removeModal={setMoadalActive}
					defaultInputData={{ ...editData, type: "edit" }}
				/>
			)}
		</>
	);
}

export default Educations;
