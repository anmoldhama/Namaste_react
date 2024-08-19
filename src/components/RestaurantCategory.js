import { IMAGE_LINK } from '../utils/constants';

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
        <ul className="p-4 bg-white space-y-3">
          {category.card.card.itemCards.map((item) => (
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
