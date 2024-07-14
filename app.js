import React from "react";
import ReactDOM from "react-dom/client";
// ****************nested childs***************
// const heading = React.createElement("div", {}, 
//                 React.createElement("div", {}, 
//                 React.createElement("h1", {}, "hello world from react!")
//                 ));


//******************Siblings*********************
const heading = React.createElement("div",{}, 
                React.createElement("div",{}, [React.createElement("h1",{}, "this is the first sibling"),
                    React.createElement("h1",{}, "this is the second sibling")
                ]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);