import React from "react";
import './about.css'
import ME from '../../assets/me-about3.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return(
        <section id="about">
                <h4>Conheça mais</h4>
                <h2>Um pouco sobre nós</h2>
                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-img">
                            <img src={ME} alt="Foto pessoal" className="about__img"/>
                        </div>
                    </div>
                    

                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <FaAward className="about__icon"/>
                                <h4>Consultoria Imobiliária</h4>
                                <small>Arujá e Região</small>
                            </article>

                            <article className="about__card">
                                <FiUsers className="about__icon"/>
                                <h4>Satisfação dos Clientes</h4>
                                <small>Prioridades</small>
                            </article>

                            <article className="about__card">
                                <VscFolderLibrary className="about__icon"/>
                                <h4>Projetos e Soluções</h4>
                                <small>Encontramos o empreendimento ideal</small>
                            </article>
                        </div>

                        <p>Somos uma empresa de Consultoria Imobiliária, trabalhamos com empreendimentos privados, buscamos a máxima satisfação dos nossos clientes afim de encontrarem um local que seja adequado a sua realidade e necessidades, agende uma visita e venha conhecer nossas oportunidades.
                        </p>

                        <a href="https://wa.me/5511942596382" className="btn btn-primary">Entre em Contato</a>

                    </div>
                </div>
        </section>
    )
}

export default About;