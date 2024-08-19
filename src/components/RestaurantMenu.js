import { useState } from 'react';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resItems = useRestaurantMenu(resId);
  const [activeIndex, setActiveIndex] = useState(0);

  if (resItems === null) return <h1 className="text-center text-2xl font-semibold my-8">No Data Found</h1>;

  const { name } = resItems?.cards[2]?.card?.card?.info;

  const categories = resItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
    (c) => c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Restaurant Name */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">{name}</h1>

      {/* Menu Categories */}
      <div className="space-y-4">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            category={category}
            index={index}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
