import React, { useRef, useState } from 'react'
import classes from './YourCompany.module.scss'
import { activeDoteAction } from 'reduxToolkit/companyRegister/companyRegister';
// import { photoUpload } from 'reduxToolkit/ResumeSlice';
import { useDispatch, useSelector } from 'react-redux';

import imgUpload from '../../../../assets/images/uploadImage.png'
// import { addCompanyInformation } from 'reduxToolkit/extraReducers';
import { useTranslation } from 'react-i18next';
import { yourCompany } from 'reduxToolkit/companyRegister/companyRegisterActions';



export const YourCompany = () => {


  const [isUpload, setIsUpload] = useState(false)
  const [image, setImage] = useState('')

  const name = useRef("")
  const phoneNumber = useRef("")
  const fileInput = useRef(null)

  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.companyRegister)

  const { t } = useTranslation()

  const onImageChange = (event) => {
    setImage(event.target.files[0])
    setIsUpload(prev => prev = true)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 3, label: "About company" },
        { id: 3, type: "About" }
      ])
    )
    dispatch(yourCompany({
      "companyInformationName": name.current.value, 
      "companyInformationPhoneNumber": phoneNumber.current.value,
      "formFile": image
    }))
  };

  const handleBack = (event) => {
    event.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 1, label: "Company Information" },
        { id: 1, type: "Information" }
      ])
    );
  }

  return (
    <>
      {loading
        ? <h2>{t("loading")}</h2>
        : <div className={classes.yourCompany}>
          <h3>{t("yourCompany")}</h3>
          <div className={classes.yourCompany__addImage} onChange={onImageChange}>
            {!isUpload && (
              <>
                <img src={imgUpload} alt="" onClick={() => fileInput.current.click()} />
                <h4>{t("addCompanyPhoto")}</h4>
              </>
            )}
            {isUpload && (
              <>
                <img className="uploadedImage" src={URL.createObjectURL(image)} alt="uploaded images" onClick={() => fileInput.current.click()} />
                <h4 className="title">{t("changeCompanyPhoto")}</h4>
              </>
            )}
            <input
              type="file"
              ref={fileInput}
              accept='.jpg, .jpeg, .png'
              style={{ display: "none" }}
            />
          </div>
          <div className={classes.yourCompany__nameInput}>
            <h4>{t("companyName")}</h4>
            <input
              type="text"
              placeholder={t("companyNameInput")}
              ref={name}
              required
            />
          </div>
          <div className={classes.yourCompany__numberInput}>
            <h4>{t("number")}</h4>
            <input
              type="number"
              placeholder={t("companyPhoneNumberInput")}
              ref={phoneNumber}
              required
            />
          </div>
          <div className={classes.yourCompany__buttons}>
            <button className={classes.yourCompany__buttonsPrev} onClick={handleBack}>{t("back")}</button>
            <button className={classes.yourCompany__buttonsNext} onClick={handleSubmit}>{t("next")}</button>
          </div>
        </div>
      }
    </>
  );
}
