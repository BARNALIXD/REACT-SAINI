import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    'h1',
    {id:"heading"},
    "NamasteReact"
);

console.log(heading);

//JSX
const jsxheading = <h1 id="heading" >Namaste reading using JSX</h1>;

console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);


