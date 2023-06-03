import Context from 'components/Context/Context';
import React from 'react';
import { useContext } from 'react';
import './Available.scss'
// import { useTranslation } from 'react-i18next'

const Available = () => {

    // let formData = new FormData();   
    const OnChangeFunc = (AviableValue) => {
        if(!AviableValue){
            console.log("1234567890-=");
            return false
        } 
        // formData.append()
        console.log(AviableValue);
        return AviableValue
    }

    const {  setIsAvialable } = useContext(Context)

    const AviableFunc = (bol) => {
        console.log("formData");
        setIsAvialable(bol)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    // const { i18n, t } = useTranslation()

    return (
        <div className='freelanceravailable'>
            <h2 className='freelanceravailable_title' >Avialable</h2>
            <p className='freelanceravailable_info' >Write down write down how many hours a week you devote to work</p>

            <h3 className='freelanceravailable_text' >I can currently work</h3>
            <form method='PUT' onSubmit={(e) => handleSubmit(e)}>
            <ul className="freelanceravailable_list">
                <li className="freelanceravailable_list_item">
                    <input name='chesked_radio' type="radio"  value='20' onClick={() => OnChangeFunc('20')} />
                    <h4 className="freelanceravailable_list_item_title"> More than 20 hours </h4>
                </li>
                <li className="freelanceravailable_list_item">
                    <input name='chesked_radio' type="radio"  value='30' onClick={() => OnChangeFunc('30')}/>
                    <h4 className="freelanceravailable_list_item_title"> More than 30 hours </h4>
                </li>
                <li className="freelanceravailable_list_item">
                    <input name='chesked_radio' type="radio" value='40'  onClick={() => OnChangeFunc('40')}/>
                    <h4 className="freelanceravailable_list_item_title"> More than 40 hours </h4>
                </li>
                <li className="freelanceravailable_list_item">
                    <input name='chesked_radio' type="radio" value='50'  onClick={() => OnChangeFunc('50')}/>
                    <h4 className="freelanceravailable_list_item_title"> More than 50 hours </h4>
                </li>
            </ul>
            <div className="freelanceravailable_wrapper">
                <button type='submit' className='freelanceravailable_wrapper_btn' onClick={() => AviableFunc(false) } >Cancel</button>
                <button type='submit' className='freelanceravailable_wrapper_btn1' onClick={() => AviableFunc(false) }>Save</button>
            </div>
            </form>
        </div>
    );
};

export default Available;