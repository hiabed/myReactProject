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

const Explore = () => {
    return (
        <div style={exploreStyle} id="explore">
            <h2 style={h2Style}>50+ Beautiful rooms inspiration</h2>
            <p style={pStyle}>Our designer already made a lot of
                beautiful prototipe of rooms that inspire you</p>
            <button style={buttonStyle}>Explore More</button>
        </div>
    );
}

export default Explore;
