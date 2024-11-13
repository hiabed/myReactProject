// const furniroStyle = {
//     color: "#3A3A3A",
//     textAlign: "center",
//     fontFamily: "Poppins",
//     fontSize: "40px",
// }

// const pStyle = {
//     color: "#616161",
//     textAlign: "center",
//     fontFamily: "Poppins",
//     fontSize: "20px",
//     fontWeight: "600",
//     lineHeight: "150%",
// }

const firstDiv = {
    marginTop: 67,
}

const Furniture = () => {
    return (
        <>
            <div style={firstDiv}>
                {/* <p style={pStyle}>Share your setup with</p>
                <h2 style={furniroStyle}>#FuniroFurniture</h2> */}
                <img src="Share.svg" alt="share.svg" />
            </div>
        </>
    );
}

export default Furniture;