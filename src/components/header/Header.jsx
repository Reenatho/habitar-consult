import React from "react";
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me3.png'
import HeaderSocial from "./HeaderSocial";

const Header = () => {
    return(
        <header>
            <div className="container header__container">
                <h4>Olá, SEJA BEM VINDO!</h4>
                
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="Eu" className="me-img" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;