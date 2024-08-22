import React from 'react';
import { useDispatch } from 'react-redux';
import { IMAGE_LINK } from '../utils/constants';
import { addItems } from '../utils/cartSlice';

const ItemList = ({ items }) => {
  const dispatchItems = useDispatch();

  const handleAddItems = (item) => {
    dispatchItems(addItems(item));
  };

  return (
    <ul className="p-4 bg-white space-y-3">
      {items.map((item) => (
        <li key={item.card.info.id} className="flex justify-between items-center border-b py-2">
          {/* Displaying the item image */}
          <img
            src={`${IMAGE_LINK}${item.card.info.imageId}`}
            alt={item.card.info.name}
            className="w-16 h-16 object-cover rounded"
          />
          {/* Displaying the item name */}
          <span className="text-lg font-medium text-gray-700">{item.card.info.name}</span>
          {/* Displaying the item price */}
          <span className="text-lg font-medium text-gray-500">₹{item.card.info.price / 100}</span>
          {/* Add button */}
          <button
            className="text-lg font-medium text-gray-500"
            onClick={() => handleAddItems(item)}
          >
            ADD
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
