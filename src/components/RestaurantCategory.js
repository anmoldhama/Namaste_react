import React from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ category, index, activeIndex, toggleAccordion }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg">
      {/* Accordion Header */}
      <div
        onClick={() => toggleAccordion(index)}
        className="cursor-pointer p-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
      >
        <h2 className="text-xl font-semibold text-gray-800">{category.card.card.title}</h2>
        <span className="text-xl">{activeIndex === index ? '−' : '+'}</span>
      </div>

      {/* Accordion Content */}
      {activeIndex === index && (
        <ItemList items={category.card.card.itemCards} />
      )}
    </div>
  );
};

export default RestaurantCategory;
