import React from "react";
import ReactDOM from "react-dom/client";
// ****************nested childs***************
// const heading = React.createElement("div", {}f}, 
//                 React.createElement("h1", {}, "hello world from react!")
//                 ));


//******************Siblings*********************
// const heading = React.createElement("div",{}, 
//                 React.createElement("div",{}, [React.createElement("h1",{}, "this is the first sibling"),
//                     React.createElement("h1",{}, "this is the second sibling")
//                 ]));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//**************** JSX syntax**********************

// const jsxHeading = (<h1>Namaste javascript with jsx</h1>);

//*****************Functional components ************************

// const Title = ()=>{
//     return (
//         <h1>title</h1>
//     )
// }
// const JsxHeading = ()=>{
//     return (
//    <div>
//     <Title />
//     <h1>Namaste javascript with functianal components</h1>
//     </div>
//     )
// }



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

// <JsxHeading />

// );

//****************************** create an app with header,body and footer****************************

/*
* Header
  -Logo
  - Nav Items

* Body
 - Search
 - Restaurant Container
 - Restaurant Card
  -img
  -Name of Res,Star rating, cuisine, delivery time,etc 

* Footer
 - Cppyright
 - Links
 - Address
 - Contact
*/

const cards= [
     {
      name: "Meghna Food",
      place: "Noida",
      DeliveryTime: "30",
      Rating: "5",
      price: "120"
     },
     {
        name: "KFC Food",
        place: "Mumbai",
        DeliveryTime: "24",
        Rating: "4.3",
        price: "90"
     },
     {
        name: "Dominos Food",
        place: "Meerut",
        DeliveryTime: "25",
        Rating: "4.6",
        price: "95"
     },
     {
        name: "Hawa Hawai Food",
        place: "Delhi",
        DeliveryTime: "29",
        Rating: "4",
        price: "85"
       }
]
   


const Header = ()=>{
    return (<div className="nav-items">
        <div>
        <img className="logo" src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg"/>
        </div>
        <ul>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact Us</li>
         <li>Cart</li>
        </ul>
    </div>)
}

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

const Body =()=>{
    return (
        <div className="body">
            <div>Search</div>
            <div className="res-container">
               <RestaurantCards cards={cards}/>
            </div>
        </div>
    )
}

const AppLayout =()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
