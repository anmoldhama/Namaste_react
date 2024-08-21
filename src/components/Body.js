import { useState, useContext } from 'react';
import RestaurantCards from '../components/RestaurantCards';
import { cards as mockCards } from '../utils/mockData';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import './css/Body.css'; // Make sure to remove any conflicting styles if necessary
import UserContext from '../utils/UserContext';

const Body = () => {
    const [filteredCards, setFilteredCards] = useState(mockCards);
    const [filteredRestaurant, setFilteredRestaurant] = useState(mockCards);
    const [searchText, setSearchText] = useState("");

    const {isLoggedIn} = useContext(UserContext);
    console.log(isLoggedIn);

    const topRatedSearchHandler = () => {
        const ratingFilter = filteredCards.filter((res) => res.Rating >= 4.6);
        setFilteredCards(ratingFilter);
        setFilteredRestaurant(ratingFilter); // To update the filteredRestaurant state as well
    }

    const handleSearchText = () => {
        const searchFilter = filteredCards.filter((res) =>
            res.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(searchFilter);
    }

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) return (
        <h1 className="text-center text-2xl font-semibold my-8">Looks like you are not connected to the internet!</h1>
    );

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Filter Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                <div className="flex flex-grow mb-4 sm:mb-0">
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded-lg w-full sm:w-96 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search for restaurants..."
                    />
                    <button
                        onClick={handleSearchText}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-700 transition-colors duration-300"
                    >
                        Search
                    </button>
                </div>
                <button
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                    onClick={topRatedSearchHandler}
                >
                    Top Rated Restaurants
                </button>
            </div>

            {/* Restaurant Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant.id}
                        to={`/restaurants/${restaurant.id}`}
                        className="block"
                    >
                        <RestaurantCards cards={[restaurant]} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;
