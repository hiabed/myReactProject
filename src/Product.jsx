const styleObj = {
    width: "285px",
    height: "446px",
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    backgroundColor: "#F4F5F7",
}

const priceStyle = {
    display: "flex",
    gap: "16px",
    marginLeft: "16px",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "150%"
}

const h3Style = {
    marginLeft: "16px",
    marginTop: "16px",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "600",
}

const pStyle = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
}

const oldPriceStyle = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "150%",
    textDecoration: "line-through",

}

const Product = (props) => {
    const {img, title, description, price, oldPrice} = props.product;
    return (
        <div style={styleObj}>
            <img src={img} alt={img} />
            <h3 style={h3Style}>{title}</h3>
            <p style={{marginLeft: "16px"}}>{description}</p>
            <div style={priceStyle}>
                <h3>{price}</h3>
                <p style={oldPriceStyle}>{oldPrice}</p>
            </div>
        </div>
    );
}

export default Product;