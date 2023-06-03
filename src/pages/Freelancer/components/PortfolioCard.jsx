import React from 'react';
import './PortfolioCard.scss'
import cards from '../../../assets/images/Freelancer/portfolio.png'

const PortfolioCard = () => {
    return (
        <div className='freelancermodal_portfoliocard'>
            <div className="freelancermodal_portfoliocard_wrapper">
                 <img className='freelancermodal_portfoliocard_wrapper_img' src={cards} alt="" />
                  <h3>Mobile app My Career</h3>
                  <p>6 days ago</p>  
            </div>
            <div className="freelancermodal_portfoliocard_wrapper">
                 <img className='freelancermodal_portfoliocard_wrapper_img' src={cards} alt="" />
                  <h3>Mobile app My Career</h3>
                  <p>6 days ago</p>  
            </div>
            <div className="freelancermodal_portfoliocard_wrapper">
                 <img className='freelancermodal_portfoliocard_wrapper_img' src={cards} alt="" />
                  <h3>Mobile app My Career</h3>
                  <p>6 days ago</p>  
            </div>
            <div className="freelancermodal_portfoliocard_wrapper">
                 <img className='freelancermodal_portfoliocard_wrapper_img' src={cards} alt="" />
                  <h3>Mobile app My Career</h3>
                  <p>6 days ago</p>  
            </div>
                        <div className="freelancermodal_portfoliocard_wrapper">
                 <img className='freelancermodal_portfoliocard_wrapper_img' src={cards} alt="" />
                  <h3>Mobile app My Career</h3>
                  <p>6 days ago</p>  
            </div>
        </div>
    );
};

export default PortfolioCard;