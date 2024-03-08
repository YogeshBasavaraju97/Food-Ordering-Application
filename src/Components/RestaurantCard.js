import React from 'react';
import { IMG_URL } from '../../utils/constant';

const RestaurantCard = (props) => {
  const { resData } = props;

  // const { imgid, name, cuisine, star, id } = resData?.data;
  return (
    <div className="resto-card">
      <img
        className="restocard-logo"
        alt="src-logo"
        src={IMG_URL + resData.info.cloudinaryImageId}
      />
      <h3>{resData.info.name} </h3>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.avgRatingString}</h4>
      <h4>20min</h4>
    </div>
  );
};

export default RestaurantCard;
