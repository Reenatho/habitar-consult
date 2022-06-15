import React from "react";
import CV from '../../assets/cvr.pdf'
import './cta.css'

const CTA = () => {
    return(
        <div className="cta">
            <a href={CV} download className="btn">Material Promocional</a>
            <a href="https://wa.me/5511942596382" target="_blank" className="btn btn-primary">Fale com o Consultor</a>
        </div>
    )
}

export default CTA;