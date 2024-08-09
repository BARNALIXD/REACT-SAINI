import React from 'react';
import ReactDOM from 'react-dom/client';

//Element:
const title = () => (
<h1 className='heading' tabIndex={5}>
    Namaste reading using JSX
    </h1>
    );


 const HeadingComponent = () =>  (
    
            <div id='container'>
                <h2> {title} </h2> 
                //this is element included inside another components
            <h1 className='heading'>Namaste react functional components</h1>
        </div>
    );



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent/>); // this is how you render components
 

