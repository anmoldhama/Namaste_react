const RestaurantCards = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {cards.map((item, index) => (
                <div key={index} className="restaurant-card bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                        <h2 className="text-gray-600">Place: {item.place}</h2>
                        <h2 className="text-gray-600">Delivery Time: {item.DeliveryTime}</h2>
                        <h2 className="text-yellow-500">Rating: {item.Rating} stars</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RestaurantCards;
