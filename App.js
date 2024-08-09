import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
<h1 className='heading' tabIndex={5}>
    Namaste reading using JSX
    </h1>
    );



const HeadingComponent = () =>  (
            <div id='container'>

                //you can type title many number of times there is no limit 

            <Title/>
            <Title></Title>
            {Title}
            <h1 className='heading'>Namaste react functional components</h1>
        </div>
    );



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>); 
 

