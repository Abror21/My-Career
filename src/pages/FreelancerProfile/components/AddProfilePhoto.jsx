import React, { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { countryList, photoUpload } from 'reduxToolkit/resumeSlice/ResumeSlice';
import Select from "react-select";
import image from '../../../assets/images/FreelancerPortfolio/woman.svg'
import './AddProfilePhoto.scss'
import { useContext } from 'react';
import Context from 'components/Context/Context';
const AddProfilePhoto = () => {

	const { setAddIsPortfolio } = useContext(Context)

	const AddIsPortfolioFunc  = () => {
		setAddIsPortfolio(false)
	}

    const [ uploaded, setUploaded ] = useState(false)
    const firstName = useRef("");
	const lastName = useRef("");
	const email = useRef("");
	const price = useRef("");
    const hiddenFileInput = useRef(null);
    const dispatch = useDispatch()

    	const handleClick = event => {
		hiddenFileInput.current.click();
	};
    	let fileUploaded;
	const handleChange = event => {
		fileUploaded = event.target.files[0];
		setUploaded(event.target.files[0]);
	};
    	const handleSubmit = e => {
		let formdatas = new FormData();
		formdatas.append("FirstName", firstName.current.value);
		formdatas.append("LastName", lastName.current.value);
		formdatas.append("Email", email.current.value);
		formdatas.append("Price", price.current.value);
		formdatas.append("Image", fileUploaded);
		dispatch(countryList());
		dispatch(photoUpload(formdatas));
		e.preventDefault();
	};


    // 	const [userChoice, setUserChoice] = useState([0, 0]);
        
    // const positionList = useSelector(state => state.resume.positionList);
    //     	let options = [];
	// let skills = [];
	// for (let i = 0; i < 5; i++) {
	// 	options.push({ value: [positionList[i].id, positionList.indexOf(positionList[i])], label: positionList[i].name });
	// 	skills.push(positionList[i].skills);
	// }

    //     let skillsList = [];
    //     for (let i = 0; i < skills[userChoice[1]].length; i++) {
	// 	skillsList.push({ value: skills[userChoice[1]][i].id, label: skills[userChoice[1]][i].name });
	// }

    return (
        <div className="photoCard_freelancer" >
            			{!uploaded && (
				<div onClick={handleClick} className="imageUpload">
					<div className="imageUp"  style={{backgroundImage:`url(${image})`}}  ></div>
					<h3 className="title">Add your profile photo</h3>
				</div>
			)}
			{uploaded && (
				<div onClick={handleClick} className="imageUpload">
					<div className="imageUp">
						<img className="uploadedImage" src={URL.createObjectURL(uploaded)} alt="uploaded images" />
					</div>
					<h3 className="title">Change your profile photo</h3>
				</div>
			)}
            <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: "none" }} />
			<form required onSubmit={(e) => handleSubmit(e)} method="post">
				<div className="inputBox">
					<div>
						<h5>Firstname</h5>
						<input ref={firstName} type="text" placeholder="Write in your first name" required />
					</div>
					<div>
						<h5>Lastname</h5>
						<input ref={lastName} type="text" placeholder="Write in your last name" required />
					</div>
					<div>
					<h5>Position</h5>
						<Select
							className="position"
							classNamePrefix="mySelect"
							options={[{value:'asd', placeholder: 'asdsd'}]}
							placeholder="Positions*"
							// onChange={choice => setUserChoice(choice.value)}
						/>
					</div>
					<div>
						<h5>Price ($/hour)</h5>
						<input ref={price} type="number" placeholder="Digits only" required />
					</div>
				</div>
			<div className="freelanceravailable_wrapper">
                <button className='freelanceravailable_wrapper_btn'  onClick={() => AddIsPortfolioFunc(false)}  >Cancel</button>
                <button className='freelanceravailable_wrapper_btn1' onClick={() => AddIsPortfolioFunc(false)}  >Save</button>
            </div>
			</form>       
        </div>
    );
};

export default AddProfilePhoto;