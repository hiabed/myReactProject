import "./ShowMore.css";

const borderStyle = {
    width: "245px",
    height: "48px",
    border: "1px solid #B88E2F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "32px auto 0",
}

const hoverStyle = {
    backgroundColor: "#B88E2F",
}

const showStyle = {
    color: "#B88E2F",
    fontFamily: "Poppins",
    fontSize: "16px",
}

const ShowMore = () => {
    return (
        <div id="more" style={borderStyle} onMouseEnter={hoverStyle}>
            <h1 id="more-text" style={showStyle}>Show More</h1>
        </div>
    );
}

export default ShowMore;