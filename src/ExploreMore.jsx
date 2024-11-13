import Explore from './Explore';
import InnerPeace from './InnerPeace';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ExploreMore.css';

const parentStyle = {
    display: "flex",
    width: "1440px",
    height: "670px",
    marginTop: "69px",
    backgroundColor: "#FCF8F3",
    alignItems: "center",
};

const innerPeaceStyle = {
    display: "flex",
    gap: "24px",
};

const ExploreMore = () => {
    return (
        <div style={parentStyle}>
            <Explore />
            <div style={innerPeaceStyle} id="inner-peace">
                <InnerPeace />
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000}
                >
                    <img src="image 1.svg" alt="chairs image 1" />
                    <img src="image 2.svg" alt="chairs image 2" />
                    <img src="image 3.svg" alt="chairs image 3" />
                    <img src="image 4.svg" alt="chairs image 4" />
                </Carousel>
            </div>
        </div>
    );
}

export default ExploreMore;
