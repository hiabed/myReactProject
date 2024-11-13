import './Footer.css'

const bigDiv = {
    display: "flex",
    marginTop: 50,
    justifyContent: "space-evenly",
    borderTop: "1px solid rgba(0, 0, 0, 0.17)",
    height: 505,
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

const help = {
    display: "flex",
    flexDirection: "column",
    gap: 40,
    marginTop: 48,
}

const newsletter = {
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

const Links = () => {
    return (
        <div style={links}>test</div>
    );
}

const Help = () => {
    return (
        <div style={help}>test</div>
    )
}

const Newsletter = () => {
    return (
        <div style={newsletter}>test</div>
    );
}

const Footer = () => {
    return (
        <>
            <div style={bigDiv}>
                <Address />
                <Links />
                <Help />
                <Newsletter />
            </div>
        </>
    );
}

export default Footer;