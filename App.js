import React from 'react';
import ReactDOM from 'react-dom/client';


// normal element creation
const heading = (
<h1 className='heading'>
    Namaste reading using JSX
    </h1>
    );


//this is know as short hand rule for function
    const fn = () => {
        return true;
    }
    const fn2 = () =>  true;




    // React Functional components
    const Headingcomponent = () => {
        return <h1>Namaste react functional components</h1>
    };
    
    // or this:
    const HeadingComponent2 = () =>  (
        <div id='container'>
            <h1 className='heading'>Namaste react functional components</h1>
        </div>
    );



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
 

