import './Footer.css'

const bigDiv = {
    display: "flex",
    marginTop: 50,
    justifyContent: "space-evenly",
    borderTop: "1px solid rgba(0, 0, 0, 0.17)",
}

const address = {
    display: "flex",
    flexDirection: "column",
    gap: 40,
    marginTop: 48,
}

const links = {
    display: "flex",
    flexDirection: "column",
    gap: 40,
    marginTop: 48,
}

const h1Style = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
}

const pStyle = {
    color: "#9F9F9F",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    width: 285,
}

const Address = () => {
    return (
        <div style={address}>
            <h1 style={h1Style}>Funiro.</h1>
            <p style={pStyle}>400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA</p>
        </div>
    );
}

const liStyle = {
    color:" #000",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    listStyleType: "none",
    marginBottom: 46,
}

const h3Style = {
    marginBottom: 15,
    color: "#9F9F9F",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
}

const Links = () => {
    return (
        <div style={links}>
            <h3 style={h3Style}>links</h3>
            <ul>
                <li style={liStyle}>Home</li>
                <li style={liStyle}>Shop</li>
                <li style={liStyle}>About</li>
                <li style={liStyle}>Contact</li>
            </ul>
        </div>
    );
}

const Help = () => {
    return (
        <div style={links}>
            <h3 style={h3Style}>Help</h3>
            <ul>
                <li style={liStyle}>Payment Options</li>
                <li style={liStyle}>Returns</li>
                <li style={liStyle}>Privacy Policies</li>
            </ul>
        </div>
    );
}

const subscribe = {
    display: "flex",
    gap: 18,
}

const input = {
    // border: "none",
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    borderBottom: "1px solid black",
}

const buttonStyle = {
    backgroundColor: "#FFF",
    padding: 10,
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    borderBottom: "1px solid black",
    fontFamily: "Poppins",
    fontSize: "14px",
}

const Newsletter = () => {
    return (
        <div style={links}>
            <h3 style={h3Style}>Newsletter</h3>
            {/* Newsletter */}
            <div style={subscribe}>
                <input style={input} placeholder='Enter Your Email Address' type="email" />
                <input id="subButton" style={buttonStyle} type="submit" value="SUBSCRIBE" />
            </div>
        </div>
    );
}

const rights = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    marginLeft: 102.01,
    marginTop: 35
}

const Footer = () => {
    return (
        <div style={{height: 505}}>
            <div style={bigDiv}>
                <Address />
                <Links />
                <Help />
                <Newsletter />
            </div>
            <hr style={{backgroundColor: "#D9D9D9", width: 1240.015, margin: "auto", border: "none", height: 1}}/>
            <p style={rights}>2023 furino. All rights reverved</p>
        </div>
    );
}

export default Footer;