import { useState } from 'react';
import RestaurantCards from '../components/RestaurantCards';
import {cards} from '../utils/mockData';



const Body =()=>{
 const [filteredCards, setfilteredCards] = useState(cards);

 const topRatedSearchHandler = ()=>{
    const ratingFilter = filteredCards.filter((res)=>{
        return res.Rating >=4.6
    });
    setfilteredCards(ratingFilter);
}

    return (
        <div className="body">
            <div className='filter'>
                <button className='filter-btn' onClick={topRatedSearchHandler}>Search Top Rated Restaurants</button>
                </div>
            <div className="res-container">
               <RestaurantCards cards={filteredCards}/>
            </div>
        </div>
    )
}

export default Body;