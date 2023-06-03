import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { activeDoteAction } from 'reduxToolkit/companyRegister/companyRegister';
import classes from './AboutCompany.module.scss'

import add from '../../../../assets/images/addIcon.png'
import cancel from '../../../../assets/images/Resume/cancel.png'
import { useTranslation } from 'react-i18next';
import { companyLocation } from 'reduxToolkit/companyRegister/companyRegisterActions';


export const AboutCompany = () => {
  const [data, setData] = useState([])
  const [aboutCompany, setAboutCompany] = useState({ locations: [], description: '' })
  const [firstLocation, setFirstLocation] = useState({ location: '' })

  const { t } = useTranslation()

  const dispatch = useDispatch()

  const handleAddLocation = () => {
    setData(prev => [...prev, { location: '' }])
  }

  const handleInput = ({ id, value }) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          location: value
        }
      }
      return item
    })
    setData(newData)
    setAboutCompany(company => ({ ...company, locations: [...data, firstLocation] }))
  }

  const handleDeleteLocation = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const handleTextarea = ({ type, value }) => {
    setAboutCompany(company => ({ ...company, locations: [...data, firstLocation], [type]: value }))
  }


  const handleClick = (event) => {
    event.preventDefault()
    if (aboutCompany.description && firstLocation.location) {
      dispatch(
        activeDoteAction([
          { id: 4, label: "Contacts" },
          { id: 4, type: "SocialMedia" }
        ])
      )
      dispatch(companyLocation(aboutCompany))
    }
  }

  const handleBack = (event) => {
    event.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 2, label: "Company" },
        { id: 2, type: "Company" }
      ])
    );
  }

  return (
    <div className={classes.aboutCompany}>
      <h2 className={classes.aboutCompany__title}>
        {t("aboutYourCompanyTitle")}
      </h2>
      <p className={classes.aboutCompany__descr}>
        {t("aboutYourCompanyDescription")}
      </p>
      <h3 className={classes.aboutCompany__locationTitle}>
        {t("location")}
      </h3>
      <div className={classes.aboutCompany__locationInput}>
        <input
          value={aboutCompany.locations.location}
          onChange={(e) => setFirstLocation(prev => ({ ...prev, location: e.target.value }))}
          type="text"
          placeholder='Write a location'
          required
        />
        <img src={add} alt="" onClick={handleAddLocation} />
      </div>
      {data.map((el) => {
        return (
          <div key={el.id} className={classes.aboutCompany__locationInput}>
            <input
              value={el.location}
              onChange={(e) => handleInput({ id: el.id, value: e.target.value })}
              type="text"
              placeholder={t("locationInput")}
              required
            />
            <img src={cancel} alt="" onClick={() => handleDeleteLocation(el.id)} />
          </div>
        )
      })}
      <div className={classes.aboutCompany__descrInput}>
        <h3>{t("locationDescriptionTitle")}</h3>
        <textarea
          value={aboutCompany.description}
          onChange={(e) => handleTextarea({ type: 'description', value: e.target.value })}
          type="text"
          placeholder={t("locationDescriptionInput")}
          required
        />
      </div>
      <div className={classes.aboutCompany__buttons}>
        <button className={classes.aboutCompany__buttonsPrev} onClick={handleBack} >{t("back")}</button>
        <button className={classes.aboutCompany__buttonsNext} onClick={handleClick} >{t("next")}</button>
      </div>
    </div >
  )
}
