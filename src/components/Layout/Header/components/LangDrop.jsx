import React from 'react';
import './LangDrop.scss'
import arrow_down from '../../../../assets/images/header/down_arrow.svg'
import { useDispatch, useSelector } from 'react-redux';
import { lenguageChange } from 'reduxToolkit/lenguageSlice/LenguageSlice';
import i18next from 'i18next';
const LangDrop = () => {

  const data = [
    {id:1,type:"en", label: "En"},
    {id:2,type:"ru", label: "Ru"},
    {id:3,type:"uz", label: "Uz"},
  ]
  const len = useSelector(state => state.lenguage.lenguage)

  const dispatch = useDispatch()

  const handleClick = (value) => {
    dispatch(lenguageChange(value));
    i18next.changeLanguage(value);
  }

  return (
    <div className="dropdown1">
      <button className="dropbtn1">
        <h4 className='dropdown_title1' >{len?.slice(0,1).toUpperCase() + len.slice(1)}</h4>
        <img src={arrow_down} className='header_arrow_img' alt="arrow photos" />

      </button>
      <ul className="dropdown-content1">
        {
          data.map(el => (
            <li key={el.id} onClick={() => handleClick(el.type)}>{el.label}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default LangDrop;