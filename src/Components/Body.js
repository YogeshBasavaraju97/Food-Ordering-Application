import React from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../../utils/data';

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resto-Container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
