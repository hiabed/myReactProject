const borderStyle = {
    width: "245px",
    height: "48px",
    border: "1px solid #B88E2F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "32px auto 0",
}

const showStyle = {
    color: "#B88E2F",
    fontFamily: "Poppins",
    fontSize: "16px",
}

const ShowMore = () => {
    return (
        <div style={borderStyle}>
            <h1 style={showStyle}>Show More</h1>
        </div>
    );
}

export default ShowMore;