import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 * -Logo
 * -nav items
 * Body
 * -Search input
 * -Card container
 * -Restaurant card
 * -img
 * -name of the restaurant
 * -name of the restaurant , cuisines, ratings , delivery time
 * 
 * Footer
 * -adress
 * -contact
 * -links
 * 
 *  
 */

//Header
const Header = () => {
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo-image' src='https://i.pinimg.com/564x/41/ba/63/41ba6326746d7aed14737ce4334cad79.jpg' alt='Logo' />
            </div>
            <div className='nav-items'>
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>

             </ul>
            </div>
        </div>
    )
};





const styleCard = {
    backgroundColor: "#121212 "
};



const RestaurantCard = (props) => {
    console.log(props);
    return( 
        <div className='res-card' style={styleCard}>
            <img  
            className='res-logo'
            alt='res-logo'   src='https://i.pinimg.com/564x/25/39/83/253983355089ece093804cbe5e0b22fa.jpg'></img>
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>{props.stars}</h4>
        <h4>{props.time}</h4>
        </div>
    );
};




const Body = () => {
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
             <RestaurantCard resName = "CHAI GPT" cuisine="drinks" stars = "4.5 stars" time = "40 mins"/>
             <RestaurantCard resName = "KFC" cuisine = "chicken variez" stars = "5 stars" time = "30 mins" />

            </div>
        </div>
    );
};






const AppLayout = () => {
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); 
 

