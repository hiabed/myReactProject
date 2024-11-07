import { NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <header id="nav-parent">
                <nav id="main-nav">
                    <div id="logo-parent">
                        <img id="logo" src='logo.svg' alt="logo" />
                        <h1>Furniro</h1>
                    </div>
                    <ul id="items">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div id="icons">
                        <img className="icon" src="/profile-icon.svg" alt="profile" />
                        <img className="icon" src="/search-icon.svg" alt="search" />
                        <img className="icon" src="/heart-icon.svg" alt="heart" />
                        <img className="icon" src="/cart-icon.svg" alt="cart" />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navigation;