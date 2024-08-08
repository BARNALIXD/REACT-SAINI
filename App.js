import React from 'react';
import ReactDOM from 'react-dom/client';



const heading = (
<h1 className='heading'>
    Namaste reading using JSX
    </h1>
    );


    // React Functional components

    const Headingcomponent = () =>{
        return <h1>Namaste react functional components</h1>
    }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
 

