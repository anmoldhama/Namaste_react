import React, { Children, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from '../src/components/Header';
import Body from '../src/components/Body';
import RestaurantMenu from '../src/components/RestaurantMenu';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Error from '../src/components/Error';


const Grocery = lazy(()=> import("./components/Grocery"));
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
            <Outlet/>
        </div>
    )
}

const AppRouter = createBrowserRouter([
  {
    path : "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: (
        <Suspense fallback = {<h1>Loading...</h1>}>
           <Grocery />
        </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  },
  
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {AppRouter}/>);
