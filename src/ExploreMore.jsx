import Explore from './Explore';

const parentStyle = {
    display: "flex",
    width: "1440px",
    height: "670px",
    // border: "1px solid black",
    marginTop: "69px",
    backgroundColor: "#FCF8F3",
    alignItems: "center",
};

const exploreStyle = {
    marginLeft: "100px",
    display: "flex",
    flexDirection: "column",
    // border: "1px solid black",
    width: "422px",
    height: "100%",
    justifyContent: "center",
}

const h2Style = {
    width: "422px",
    color: "#3A3A3A",
    fontFamily: "Poppins",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%",
}

const pStyle = {
    width: "368px",
    color: "#616161",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "150%",
    marginTop: "7px",
}

const buttonStyle = {
    border: "none",
    width: "176px",
    height: "48px",
    backgroundColor: '#B88E2F',
    cursor: "pointer",
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "150%",
    marginTop: "25px",
};

const imgStyle = {
    width: "404px",
    height: "582px",
}

const innerPeaceStyle = {
    display: "flex",
    gap: "24px",
}

const description = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#616161",
}

const inner = {
    color: "#3A3A3A",
    fontFamily: "Poppins",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "120%",
}

const para = {
    color: "#616161",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "150%",
}

const descriptionParent = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    position: "absolute",
    left: "24px",
    bottom: "24px",
    backdropFilter: "blur(1.5px)",
    background: "rgba(255, 255, 255, 0.72)",
    width: "217px",
    height: "130px",
    justifyContent: "center",
    alignItems: "center",
}

const carouselParent = {
    border: "1px solid black",
}

const ExploreMore = () => {
    return (
        <div style={parentStyle}>
            <Explore />
            <div style={innerPeaceStyle} id="inner-peace">
                <div style={{position: "relative"}}>
                    <img style={imgStyle} src="innerPeace.svg" alt="Inner Peace" />
                    <div style={descriptionParent}>
                        <div style={description}>
                            <p style={para}>01</p>
                            <hr style={{width: "27px", height: "0px"}}/>
                            <p style={para}>Bed Room</p>
                        </div>
                        <div>
                            <h3 style={inner}>Inner Peace</h3>
                        </div>
                    </div>
                </div>
                <div style={carouselParent}>
                    <img src="Rectangle 25.svg" alt="chairs image" />
                </div>
            </div>
        </div>
    );
}

export default ExploreMore;