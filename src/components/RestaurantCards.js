const RestaurantCards =({cards})=>{
    console.log(cards);
    // const cards = props.cards;
    return (
        <div className="apk">
            {cards.map((item, index) => (
                <div key={index} className="res-card">
                    <h3>{item.name}</h3>
                    <h2>Price: {item.price}</h2>
                    <h2>Delivery time: {item.DeliveryTime}</h2>
                    <h2>Rating: {item.Rating} stars</h2>
                </div>
            ))}
        </div>
    );
    
}

export default RestaurantCards;