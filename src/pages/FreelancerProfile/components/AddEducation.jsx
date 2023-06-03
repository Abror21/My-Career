import React, { useContext } from "react";
import "./AddEducation.scss";
import { useDispatch } from "react-redux";
import { temporary6,temporary7, educationDelete, educationGet, temporary8 } from "reduxToolkit/resumeSlice/ResumeSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Context from "components/Context/Context";

function AddEducation() {
	const dispatch = useDispatch()
	const {educationList} = useSelector(state => state.resume)
    const { setAddIsEducation } = useContext(Context)

    const AddAducationFunc = (bol) => {
        setAddIsEducation(bol)
    }

	useEffect(() => {
		dispatch(educationGet())
	},[dispatch])

	const handleClick = (e) => {
		e.preventDefault()
		dispatch(temporary6())
	}

	const deletEducation = (id) => {
		dispatch(educationDelete(id))
		dispatch(educationGet())
	}

	const changeEducationPage = (e) => {
		e.preventDefault()
		dispatch(temporary7())
	}



	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(temporary8())
	}
	
	return (
		<div className="education">
			<div className="education__inner">
						<form onSubmit={handleSubmit}>
							<h2 className="education__title">Education</h2>
							<p className="education__text">
								<span className="education__textSpan">Freelancers who add their experience are twice as likely to win work.</span>
								<span className="education__textSpan">But if you're just starting out, you can still create a greatprofile.</span>
								<span className="education__textSpan">Just head on to the next page.</span>
							</p>
							<div className="education__box">
								{
									educationList.map(el => (
										<div className="education__content" key = {el.id}>
											<div className="education__texts">
												<span className="education__subtitle">{el.schoolName}</span>
												<div className="education__study">
													<span className="education__span">{el.typeStudy}</span>
													<span className="education__telecommunication">{el.educationDegree}</span>
												</div>
											</div>
					
											<div className="education__icons">
												<span className="education__icon--create" type="button" onClick={changeEducationPage}>
													<ion-icon name="create-outline"></ion-icon>
												</span>
					
												<span className="education__icon--delete" onClick={() => deletEducation(el.id)} >
													<ion-icon name="trash-outline"></ion-icon>
												</span>
											</div>
										</div>
									))
								}
							</div>
		
							<div className="education__wrapper">
								<button type="click" className="education__buttonAdd" style={{ "cursor": "pointer" }} onClick={handleClick}>+ Add new</button>
							</div>
		
							<div className="education__button" style={{ 'display':"flex" , "justify-content":"flex-end" }} >
								<button className="education__back" type="button" onClick={()=> AddAducationFunc(false)} >Back</button>
								<button className="education__next" type="submit" onClick={()=> AddAducationFunc(false)} >Next</button>
							</div>
						</form>

			</div>
		</div>
	);
}

export default AddEducation;
