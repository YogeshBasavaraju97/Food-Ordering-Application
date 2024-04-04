import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestoMenu from '../../utils/useRestoMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restoInfo = useRestoMenu(resId);
  const [showIndex, setshowIndex] = useState(0);

  if (restoInfo === null) {
    return <Shimmer />;
  }
  const { text } = restoInfo.cards[0].card.card;

  // const { itemCards } =
  //   restoInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;

  const categories =
    restoInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (type) =>
        type.card?.['card']?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  return (
    <div className="w-6/12 mx-auto text-center flex flex-col justify-center">
      <h1 className="font-bold my-3 "> {text}</h1>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.id}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          showIndex={() => setshowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
// useEffect(() => {
//   fetchMenu();
// }, []);
// const fetchMenu = async () => {
//   const data = await fetch(item_URL + resId);
//   const jsonData = await data.json();
//   console.log(jsonData.data);
//   console.log(
//     jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card
//       .card.itemCards[0].card.info.name
//   );
//   setRestoInfo(jsonData.data);
// };
