import React from 'react';
import "./Home.css";

const Home = () => {
    return (
        <main id="home">
            <div id='main'>
                <img id='main-img' src="/home-img.svg" alt="home main image" />
                <div id='new-arriaval'>
                    <div>
                        <p id='new-para'>New Arrival</p>
                        <h1 id='title'>Discover Our<br />New Collection</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br />elit tellus, luctus nec ullamcorper mattis.</p>
                        <button id='buy-now'>BUY NOW</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;