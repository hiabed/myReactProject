import React from "react";

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
                        <li><a href="#home">Home</a></li>    
                        <li><a href="#shop">Shop</a></li>    
                        <li><a href="#about">About</a></li>    
                        <li><a href="#contact">Contact</a></li>
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