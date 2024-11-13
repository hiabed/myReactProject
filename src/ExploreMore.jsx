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

// (clickHandler: () => void, hasNext: boolean, label: string) =>

const nextButtonStyle = {
    fontSize: 20,
    borderRadius: "50%",
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "white",
    right: 85,
    fill: "#FFF",
    filter: "drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16))",
    top: "267px",
}

const handleNext = (clickHandler) => 
{
    return (
        <div onClick={clickHandler} style={nextButtonStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00006 5L16.0001 12L9.00006 19" stroke="#B88E2F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}

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
                    interval={3000}
                    renderArrowNext={handleNext}
                >
                    {
                        [1, 2, 3, 4].map((el, i) => (
                            <div key={i} style={{height: 600, marginRight: 24}}>
                                <img style={{ height: 486}} src={`Rectangle 25.svg`} alt={`chairs image ${i}`} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
}

export default ExploreMore;
