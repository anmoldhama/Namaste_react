import React from "react";
import ReactDOM from "react-dom/client";
import Header from '../src/components/Header';
import Body from '../src/components/Body';
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
