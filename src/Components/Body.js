import React from 'react';
import RestaurantCard, { promotedCard } from './RestaurantCard';

import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';

const Body = () => {
  const [List, setList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  const RestaurantPromotedCard = promotedCard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/api/seo/getListing?lat=18.621055599465002&lng=73.8306423049214'
    );
    const json = await data.json();

    console.log(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setList(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredList(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Please check your internet connection</h1>;
  }

  //conditional rendering
  // if (List.length === 0) {
  //   return <shimmer />;
  // }

  return List.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="px-4 m-3 border border-solid border-black"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value.toLowerCase());
          }}
        />
        <button
          className="m-4 px-4 py-1 bg-blue-600 rounded-md"
          onClick={() => {
            const filterList = List.filter((res) =>
              res.info.name.toLowerCase().includes(searchValue)
            );
            console.log(filterList);
            console.log(List);
            setFilteredList(filterList);
          }}
        >
          Search
        </button>
        <button
          className="m-4 px-4 py-1 bg-blue-200 rounded-md"
          onClick={() => {
            const list = List.filter((res) => res.stars > 4);
            setList(list);
          }}
        >
          Top Rated restaurant
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={'/restaurant/' + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4 ? (
              <RestaurantPromotedCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
