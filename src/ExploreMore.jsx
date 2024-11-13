import Explore from './Explore';
import InnerPeace from './InnerPeace';

const parentStyle = {
    display: "flex",
    width: "1440px",
    height: "670px",
    // border: "1px solid black",
    marginTop: "69px",
    backgroundColor: "#FCF8F3",
    alignItems: "center",
};

const innerPeaceStyle = {
    display: "flex",
    gap: "24px",
}

const carouselParent = {
    border: "1px solid black",
}

const ExploreMore = () => {
    return (
        <div style={parentStyle}>
            <Explore />
            <div style={innerPeaceStyle} id="inner-peace">
                <InnerPeace />
                <div style={carouselParent}>
                    <img src="Rectangle 25.svg" alt="chairs image" />
                </div>
            </div>
        </div>
    );
}

export default ExploreMore;