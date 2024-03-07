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
        src={IMG_URL + resData.imgid}
      />
      <h3>{resData.name} </h3>
      <h4>{resData.cuisine}</h4>
      <h4>{resData.stars}*</h4>
      <h4>20min</h4>
    </div>
  );
};

export default RestaurantCard;
