/* eslint-disable no-unsafe-optional-chaining */
{/* eslint-disable react/prop-types */}
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { IMG_URL } from '../../../utils/constantData';
import './card.css';

function Card({ resData }) {
  const { name, cuisines, avgRating, costForTwo,cloudinaryImageId } = resData?.info;

  return (
     <div className="card">
      <div className="top-section">
        <img className='card-img' src={`${IMG_URL}/${cloudinaryImageId}`} alt={name} />
        <div className="border"></div>
      </div>
      <div className="bottom-section">
        <span className="title">{name}</span>
        <div className="cuisines">{cuisines.join(', ')}</div>
        <div className="row row1">
          <div className="item">
            <span className="big-text">{avgRating}</span>
            <span className="regular-text">Rating</span>
          </div>
          <div className="item">
            <span className="big-text">{costForTwo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
