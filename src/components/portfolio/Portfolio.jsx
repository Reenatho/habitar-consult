import React from "react";
import './portfolio.css';




import IMG1 from '../../assets/Topo1.jpg'
import IMG2 from '../../assets/Topo2.jpg'
import IMG3 from '../../assets/Topo3.jpg'
import IMG4 from '../../assets/Obra1.jpg'
import IMG5 from '../../assets/Obra2.jpg'
import IMG6 from '../../assets/Obra3.jpg'




const Portfolio = () => {

    return(
        <section id="portfolio">
            <h4>OPORTUNIDADES</h4>
            <h2>Agende uma visita</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={IMG1} alt="Img Projeto1" />
                    </div>
                    <h3>Excelente Topografia</h3>
                    <div className="portfolio__item-cta">
                        <a href="#" className="btn" target='_blank' rel="noreferrer">Baixar</a>
                        <a href="https://wa.me/5511942596382" className="btn btn-primary" target='_blank' rel="noreferrer">Contato</a>
                    </div>
                    
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={IMG2} alt="Img Projeto1" />
                    </div>
                    <h3>Lotes de 800m²</h3>
                    <div className="portfolio__item-cta">
                        <a href="#" className="btn" target='_blank' rel="noreferrer">Baixar</a>
                        <a href="https://wa.me/5511942596382" className="btn btn-primary" target='_blank' rel="noreferrer">Contato</a>
                    </div>
                    
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={IMG3} alt="Img Projeto1" />
                    </div>
                    <h3>Ótima Localização</h3>
                    <div className="portfolio__item-cta">
                        <a href="#" className="btn" target='_blank' rel="noreferrer">Baixar</a>
                        <a href="https://wa.me/5511942596382" className="btn btn-primary" target='_blank' rel="noreferrer">Contato</a>
                    </div>
                    
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={IMG4} alt="Img Projeto1" />
                    </div>
                    <h3>Obras em andamento</h3>
                    <div className="portfolio__item-cta">
                        <a href="#" className="btn" target='_blank' rel="noreferrer">Baixar</a>
                        <a href="https://wa.me/5511942596382" className="btn btn-primary" target='_blank' rel="noreferrer">Contato</a>
                    </div>
                    
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={IMG5} alt="Img Projeto1" />
                    </div>
                    <h3>Obras em andamento</h3>
                    <div className="portfolio__item-cta">
                        <a href="#" className="btn" target='_blank' rel="noreferrer">Baixar</a>
                        <a href="https://wa.me/5511942596382" className="btn btn-primary" target='_blank' rel="noreferrer">Contato</a>
                    </div>
                    
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__img">
                        <img src={IMG6} alt="Img Projeto1" />
                    </div>
                    <h3>Obras em andamento</h3>
                    <div className="portfolio__item-cta">
                        <a href="#" className="btn" target='_blank' rel="noreferrer">Baixar</a>
                        <a href="https://wa.me/5511942596382" className="btn btn-primary" target='_blank' rel="noreferrer">Contato</a>
                    </div>
                    
                </article>
            </div>
          

        </section>
    )
}

export default Portfolio;