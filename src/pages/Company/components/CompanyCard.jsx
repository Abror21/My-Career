import React from 'react';
import './CompanyCard.scss'
import company_logo from '../../../assets/images/Company/company_logo.svg'
import ticked from '../../../assets/images/Freelancer/ticked.svg'
import { ReactComponent as Star } from '../../../assets/images/Company/star.svg'
import CompanyColasible from './CompanyColisible';

const CompanyCard = () => {
    return (
        <div className='company_card' >
            <h2 className="company_card_title">
                Odoo 13.0 Implementation Support
            </h2>
            <div className="company_card_star">
                <div className="company_card_star_img">
                    <Star /> <Star /> <Star /> <Star /> <Star />
                    <span>4.00</span>
                </div>
                <h4 className='company_card_star_title' >Aug 5, 2021 - Oct 21, 2021</h4>
            </div>
            <CompanyColasible  text={'qwertyuiopplkjhgfdsazxcvbnm'} />

            <div className="company_card_wrapper">
                <div className="company_card_wrapper_left">
                    <img src={company_logo} alt="" />
                    <div>
                        <h3>Napa Automative</h3>
                        <p> <img src={ticked} alt="" /> Verified</p>
                    </div>
                </div>
                    <ul className="company_card_wrapper_list ">
                        <li className="company_card_wrapper_list_item company_card_wrapper_list_item1">
                            <h4>5$</h4>
                            <p>Hourly</p>
                        </li>
                        <li className="company_card_wrapper_list_item company_card_wrapper_list_item1">
                            <h4>10</h4>
                            <p>Hours</p>
                        </li>
                        <li className="company_card_wrapper_list_item">
                            <h4>50</h4>
                            <p>Totally paid</p>
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default CompanyCard;