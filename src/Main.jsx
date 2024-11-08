import './Main.css';
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoad = () => {
        setIsLoading(false);
    }
    return (
        <div id='main'>
            <img id='main-img' src="/home-img.svg" onLoad={handleLoad} />
            {!isLoading ? 
                <div id='new-arrival'>
                    <div>
                        <p id='new-para'>New Arrival</p>
                        <h1 id='title'>Discover Our<br />New Collection</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br />elit tellus, luctus nec ullamcorper mattis.</p>
                        <button id='buy-now'>BUY NOW</button>
                    </div>
                </div> : 
                <ClipLoader className='loader' loading={isLoading} size={100} />
            }
        </div>
    );
}

export default Main;