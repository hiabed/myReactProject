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

const handleNext = (clickHandler, hasNext, label) => 
{
    return (
        <div onClick={clickHandler} style={{fontSize: 30, position: 'absolute', backgroundColor: 'rgba(20, 20, 20, 1)', padding: 20}}>
            {">"}
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
                    interval={5000}
                    //renderArrowNext={handleNext}
                >
                    {
                        [1, 2, 3, 4].map((el, i) => (
                            <div key={i} style={{height: 600, marginRight: 24}}>
                                <img style={{ height: 600, border: "1px solid black"}} src={`Rectangle 25.svg`} alt={`chairs image ${i}`} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
}

export default ExploreMore;
