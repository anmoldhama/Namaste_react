import { useEffect, useState } from 'react';
import RestaurantCards from '../components/RestaurantCards';
import { cards as mockCards } from '../utils/mockData';
import { Link } from 'react-router-dom';

const Body = () => {
    const [filteredCards, setFilteredCards] = useState(mockCards);
    const [filteredRestaurant, setFilteredRestaurant] = useState(mockCards);
    const [searchText, setSearchText] = useState("");

    const topRatedSearchHandler = () => {
        const ratingFilter = filteredCards.filter((res) => res.Rating >= 4.6);
        setFilteredCards(ratingFilter);
        setFilteredRestaurant(ratingFilter); // To update the filteredRestaurant state as well
    }

    const handleSearchText = () => {
        const searchFilter = filteredCards.filter((res) =>
            res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        );
        setFilteredRestaurant(searchFilter);
    }

    return (
        <div className="body">
            <div className="filter">
                <input
                    type="text"
                    className="search-box"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button onClick={handleSearchText}>Search</button>
                <button className="filter-btn" onClick={topRatedSearchHandler}>
                    Search Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                     key={restaurant.id}
                     to={"/restaurants/"+ restaurant.id}
                    >
                    <RestaurantCards cards={[restaurant]} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;
