import React, { useState } from 'react';
import Select from 'react-select';
import './AddLanguage.scss'
// import cancel from "../../../assets/images/Resume/cancel.png";
import { useContext } from 'react';
import Context from 'components/Context/Context';
const AddLanguage = () => {

	const { setAddIsLanguage  } = useContext(Context)


      const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];

  	const [ count, setCount ] = useState(1)

	const AddFunc = (num) => {
		console.log(count);
		setCount(count + num)
	}

	const RemoveFunc = (bol) => {
		setAddIsLanguage(bol)
	}

    return (
        <div>
	<div className='languageCard'>
			<h2>Write what languages you speak</h2>
			<p>
				The more languages ​​you know, <br /> the more foreign employers will contact you.
			</p>
			<form method='PATCH' className='languageForm'>
				<label htmlFor="laguages">Language*</label>
					<div className="select" style={{ "margin-top":"15px" }} >
						<Select
							className="languageSelect"
							options={options}
							placeholder="Language*"
							styles={{ "width":"300px" }}
						/>
						<Select
							className="languageSelect"
							options={options}
							placeholder="Level*"
						/>
							{/* <div className="cancelLang">
								<img src={cancel} alt="cancel" />
							</div> */}
					</div>
				<div className="addLanguage" style={{'cursor':"pointer"}} onClick={() => AddFunc(1)} >
					+ Add Language
				</div>
				<div className="pokam">
					
				<button className='backButton' onClick={()=> RemoveFunc(false)} >Back</button>
				<button className='nextButton' onClick={()=> RemoveFunc(false)} >Next</button>
				</div>
			</form>
		</div>
        </div>
    );
};

export default AddLanguage;