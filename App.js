import React from 'react';
import ReactDOM from 'react-dom/client';



// element within element
const elem = <span>React Element</span>

const title = () => (
<h1 className='heading' tabIndex={5}>
    {elem}
    Namaste reading using JSX
    </h1>
    );


 const HeadingComponent = () =>  (
    
            <div id='container'>
                <h2> {title} </h2> 
            <h1 className='heading'>Namaste react functional components</h1>
        </div>
    );



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent/>); // this is how you render components
 

