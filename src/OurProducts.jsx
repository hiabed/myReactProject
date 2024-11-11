import Product from './Product';
import ShowMore from './ShowMore';

const products = [
    {
        img: "image 1.svg",
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: "Rp 3.500.000"
    },
    {
        img: "image 2.svg",
        title: "Leviosa",
        description: "Stylish cafe chair",
        price: "Rp 2.500.000",
        oldPrice: ""
    },
    {
        img: "image 3.svg",
        title: "Lolito",
        description: "Luxury big sofa",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000"
    },
    {
        img: "image 4.svg",
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: "Rp 500.000",
        oldPrice: ""
    },
    {
        img: "Image 5.svg",
        title: "Grifo",
        description: "Night lamp",
        price: "Rp 1.500.000",
        oldPrice: ""
    },
    {
        img: "image 6.svg",
        title: "Muggo",
        description: "Small mug",
        price: "Rp 150.000",
        oldPrice: ""
    },
    {
        img: "image 7.svg",
        title: "Pingky",
        description: "Cute bed set",
        price: "Rp 7.000.000",
        oldPrice: "Rp 14.000.000"
    },
    {
        img: "image 8.svg",
        title: "Potty",
        description: "Minimalist flower pot",
        price: "Rp 500.000",
        oldPrice: ""
    },
]

const styleObj = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "32px",
    justifyContent: "center",
}

const h1Style = {
    color: "#3A3A3A",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "120%", /* 48px */
    margin: "56px 0 32px"
}

const OurProducts = () => {
    return (
        <>
            <h1 style={h1Style}>Our Products</h1>
            <div  style={styleObj}>
                { products.map( element => <Product key={element.title} product={element} /> ) }
            </div>
            <ShowMore />
        </>
    )
}

export default OurProducts;