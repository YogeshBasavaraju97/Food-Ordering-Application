import { useState } from 'react';
import ItemCard from './ItemCard';

const RestaurantCategory = ({ data, showItems, showIndex }) => {
  const handleClick = () => {
    showIndex();
  };
  console.log(data);
  return (
    <div className="flex flex-col">
      <div
        className="border  py-3 shadow-b-lg  flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <h3 className="px-3 font-bold">
          {data.title}({data.itemCards.length})
        </h3>
        <span className="px-2 text-xl">⌄</span>
      </div>
      <div>{showItems && <ItemCard items={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
