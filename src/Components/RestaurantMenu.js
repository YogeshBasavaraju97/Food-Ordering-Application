import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { item_URL } from '../../utils/constant';
import { useParams } from 'react-router-dom';
import { useRestoMenu } from '../../utils/useRestoMenu';

const ResturantMenu = () => {
  const { resId } = useParams();
  const [restoInfo, setRestoInfo] = useState(null);

  const resInfo = useRestoMenu(resId);

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
  if (restoInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwo } = restoInfo.cards[0].card.card.info;

  const { itemCards } =
    restoInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <h1> {name}</h1>
      <h2>{cuisines.join(',')} </h2>
      <h4>Cost for Two :{costForTwo / 100} £</h4>
      <h2>Menu List</h2>
      <ul>
        {itemCards.map((res) => (
          <li key={res.card.info.id}>
            {res.card.info.name} - £{res.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
