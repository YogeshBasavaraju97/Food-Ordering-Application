import React from 'react';
import { useDispatch } from 'react-redux';
import { additem } from '../../utils/CartSlices';
import { IMG_menu_URL } from '../../utils/constant';

const ItemCard = ({ items }) => {
  const dispatch = useDispatch();
  const handleEvent = (item) => {
    dispatch(additem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="flex justify-between border shadow-b-sm py-1  "
          key={item.card.info.id}
        >
          <div className="flex flex-col justify-start w-8/12 ">
            <div className="flex">
              <p className="px-2">{item.card.info.name}</p>
              <p className="">${item.card.info.price / 1000}</p>
            </div>

            <p>{item.card.info.description}</p>
          </div>
          <div className="flex justify-end relative w-3/12">
            <img
              className=" w-5/5  overflow-hidden border shadow-sm rounded-sm"
              src={IMG_menu_URL + item.card.info.imageId}
            />
            <button
              className="absolute top-0 left-[4.5rem] bg-gray-900 text-white p-1 rounded-md"
              onClick={() => handleEvent(item)}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
