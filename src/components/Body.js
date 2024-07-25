import { useEffect, useState } from 'react';
import RestaurantCards from '../components/RestaurantCards';
import { cards as mockCards } from '../utils/mockData';

const Body = () => {
    const [filteredCards, setFilteredCards] = useState(mockCards);
    const [filteredRestaurant, setFilteredRestaurant] = useState(mockCards);
    const [searchText, setSearchText] = useState("");

    // useEffect(() => {
    //     fetchList();
    // }, []);

    const topRatedSearchHandler = () => {
        const ratingFilter = filteredCards.filter((res) => res.Rating >= 4.6);
        setFilteredCards(ratingFilter);
        setFilteredRestaurant(ratingFilter); // To update the filteredRestaurant state as well
    }

    // const fetchList = async () => {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    //     const fetchedData = await data.json();
    //     console.log("fetched data", fetchedData.data.cards);
    //     setFilteredCards(fetchedData.data.cards);
    // }

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
                {filteredRestaurant.map((restaurant, index) => (
                    <RestaurantCards key={index} cards={[restaurant]} />
                ))}
            </div>
        </div>
    );
}

export default Body;