import React from 'react';
import { IMG_menu_URL } from '../../utils/constant';

const ItemCard = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          className="border shadow-b-sm py-1 flex justify-between "
          key={item.card.info.id}
        >
          <div className="flex flex-col justify-start">
            <div className="flex">
              <p className="px-2">{item.card.info.name}</p>
              <p className="">${item.card.info.price / 1000}</p>
            </div>

            <p>{item.card.info.description}</p>
          </div>

          <img
            className="w-2/12 border shadow-sm rounded-sm"
            src={IMG_menu_URL + item.card.info.imageId}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
