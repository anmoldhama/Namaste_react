import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';


const RestaurantMenu = () =>{

    const { resId } = useParams();
 console.log(resId);
 const resItems  = useRestaurantMenu(resId);

 if(resItems === null) return <h1>No Data Found</h1>;

 const {name} = resItems?.cards[2]?.card?.card?.info;
 
 const {itemCards} = resItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;
//  console.log(itemCards);



    return(
        <div>
        <h1>{name}</h1>
        <h1>Menu Items</h1>
        <ul>
            {itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price}</li>)}
            
        </ul>
        </div>
    )
}

export default RestaurantMenu;