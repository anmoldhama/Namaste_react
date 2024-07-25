const RestaurantCards = ({ cards }) => {
    return (
        <div className="apk">
            {cards.map((item, index) => (
                <div key={index} className="res-card">
                    <h3>{item.name}</h3>
                    <h2>Place: {item.place}</h2>
                    <h2>Delivery Time: {item.DeliveryTime}</h2>
                    <h2>Rating: {item.Rating} stars</h2>
                </div>
            ))}
        </div>
    );
}

export default RestaurantCards;