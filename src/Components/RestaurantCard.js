import React from 'react';
import { IMG_URL } from '../../utils/constant';
import { useContext } from 'react';
import UserContext from '../../utils/UserContext';

const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;

  // const { imgid, name, cuisine, star, id } = resData?.data;
  return (
    <div className="w-[200px] h-[300px] m-2 p-4 bg-slate-200 hover:bg-cyan-100 rounded-sm ">
      <img
        className=" w-80 h-28 object-cover "
        alt="src-logo"
        src={IMG_URL + resData.info.cloudinaryImageId}
      />
      <div>
        <h3 className="font-bold p-3">{resData.info.name} </h3>
        <h4 className="px-3">{resData.info.costForTwo}</h4>
        <h4 className="px-3">{resData.info.avgRatingString}</h4>
        <h4 className="px-3">20min</h4>
        <h4 className="px-3">{loggedInUser}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
export const promotedCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" flex absolute bg-black text-white rounded-sm justify-center">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
