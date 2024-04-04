import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearitem } from '../../utils/CartSlices';
import ItemCard from './ItemCard';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleEvent = () => {
    dispatch(clearitem());
  };
  console.log(cartItems);
  return (
    <div className=" w-4/12 m-auto">
      <h1>Cart</h1>
      <button
        onClick={handleEvent}
        className="bg-black text-yellow-50 rounded-md px-1"
      >
        Clear cart
      </button>
      <ItemCard items={cartItems} />
      {cartItems.length === 0 && <h2> Cart is Empty</h2>}
    </div>
  );
};

export default Cart;
