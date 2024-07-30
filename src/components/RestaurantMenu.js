import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { res_api_1,res_api_2 } from '../utils/constants';
const RestaurantMenu = () =>{

    const { resId } = useParams();
 console.log(resId);
 const [resItems, setResItems] = useState(null);

 useEffect(()=>{
    fetchedMenu();
 },[]); 

 const fetchedMenu = async()=>{
    const data = await fetch(res_api_1+resId+res_api_2);
    const fetchedData = await data.json();
    console.log(fetchedData);
    setResItems(fetchedData.data);
 }

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